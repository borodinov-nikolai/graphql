import { GET_USERS } from '@/entities/user'
import { getApolloClient } from '@/shared/libs/getApolloClient'
import { redirect } from 'next/navigation'
import React from 'react'
import AddProduct from '../addProduct'


export const HomePage = async () => {  
  const client = getApolloClient()
  const {data: {users}} = await client.query({query: GET_USERS})
  console.log(users)
  return (
    <main className={'xl:container xl:mx-auto px-3 xl:px-0 pt-[100px]'} >
      <AddProduct/>
    </main>

  )
}
