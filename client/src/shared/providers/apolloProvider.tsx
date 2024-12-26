'use client'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider as Provider } from '@apollo/client'
import React, { ReactNode } from 'react'



const ApolloProvider = ({children} : {children: ReactNode}) => {
    const client = new ApolloClient({
            link: createHttpLink({
              uri: process.env.NEXT_PUBLIC_SERVER_API_URL,
              credentials: 'same-origin'
            }),
            cache: new InMemoryCache(),
          });
  return (
    <Provider client={client} >
        {children}
    </Provider>
  )
}

export default ApolloProvider