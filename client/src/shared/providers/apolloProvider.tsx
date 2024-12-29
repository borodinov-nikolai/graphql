'use client'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, ApolloProvider as Provider } from '@apollo/client'
import React, { ReactNode } from 'react'
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const ApolloProvider = ({children} : {children: ReactNode}) => {

  const getAuthToken = ()=> {
    if(typeof window !== 'undefined') {
      return localStorage.getItem('jwt')
    }
  }
  

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_SERVER_API_URL,
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

 
  
  const errorLink = onError(({ graphQLErrors, networkError })=> {
    if (graphQLErrors)
      graphQLErrors.forEach(({message}) => {
        if(message === 'Forbidden resource') {
           const res =  fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/refresh`, {method: 'POST'})
           console.log(res)
        }
    }
     
      );
  })
  




    const client = new ApolloClient({
            link: ApolloLink.from([authLink, errorLink, httpLink]),
            cache: new InMemoryCache(),
          });
  return (
    <Provider client={client} >
        {children}
    </Provider>
  )
}

export default ApolloProvider