'use client'
import { ApolloProvider as Provider } from '@apollo/client'
import React, { ReactNode } from 'react'
import { getApolloClient } from '../libs/getApolloClient'


const ApolloProvider = ({children} : {children: ReactNode}) => {
    const client = getApolloClient()
  return (
    <Provider client={client} >
        {children}
    </Provider>
  )
}

export default ApolloProvider