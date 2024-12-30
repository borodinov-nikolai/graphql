'use client'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, Observable, ApolloProvider as Provider } from '@apollo/client'
import React, { ReactNode } from 'react'
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { REFRESH } from '@/entities/auth/api';

const ApolloProvider = ({children} : {children: ReactNode}) => {

  const getAuthToken = ()=> {
    if(typeof window !== 'undefined') {
      return localStorage.getItem('jwt')
    }
  }

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_SERVER_API_URL,
    credentials: 'include'
  })
  
  const authLink = setContext((_, { headers }) => {
    const token = getAuthToken();
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, operation, forward })=> {
    if (graphQLErrors) {
      const forbiddenError = graphQLErrors.find(
        ({ extensions }) => extensions?.code === 'FORBIDDEN'
      );
  
      if (forbiddenError) {
        return new Observable((observer) => {
          (async () => {
            try {
              const res = await client.query({ query: REFRESH });
              const token = res?.data?.refresh?.jwt;
              if (token) {
                console.log('Новый токен:', token);
                localStorage.setItem('jwt', token);
                operation.setContext(({ headers = {} }) => ({
                  headers: {
                    ...headers,
                    Authorization: `Bearer ${token}`,
                  },
                }));
                const subscriber = forward(operation).subscribe({
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                });
                return () => {
                  if (subscriber) subscriber.unsubscribe();
                };
              } else {
                observer.error(new Error('Не удалось обновить токен'));
              }
            } catch (error) {
              console.error('Ошибка обновления токена:', error);
              observer.error(error);
            }
          })();
        });
      }
    }
  })
  
    const client = new ApolloClient({
            link: ApolloLink.from([authLink, errorLink, httpLink]),
            cache: new InMemoryCache(),
            credentials: 'include'
          });
  return (
    <Provider client={client} >
        {children}
    </Provider>
  )
}

export default ApolloProvider