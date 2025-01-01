'use client'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, Observable, ApolloProvider as Provider } from '@apollo/client'
import React, { ReactNode } from 'react'
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { TOKENS_REFRESH } from '@/entities/auth';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';


const ApolloProvider = ({ children }: { children: ReactNode }) => {

  const getAuthToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('jwt')
    }
  }



  const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_SERVER_API_URL,
    credentials: 'include',
    headers: {
      "Apollo-Require-Preflight": "*"
    }
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

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      const forbiddenError = graphQLErrors.find(
        ({ extensions }) => extensions?.code === 'FORBIDDEN'
      );

      if (forbiddenError) {
        return new Observable((observer) => {
          (async () => {
            try {
              const res = await client.mutate({ mutation: TOKENS_REFRESH });
              const token = res?.data?.tokensRefresh?.jwt;
              if (token) {
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
              console.log('Ошибка обновления токена:', error);
              observer.error(error);
            }
          })();
        });
      }
    }
  })

  const client = new ApolloClient({
    link: ApolloLink.from([authLink, errorLink, uploadLink]),
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