import { GET_PRODUCTS } from '@/entities/product'
import { getApolloClient } from '@/shared/libs/getApolloClient'
import { CatalogPage } from '@/views/catalogPage'
import React from 'react'


const page = async () => {
   const client = getApolloClient()
   const res = await client.query({query: GET_PRODUCTS})
  return (
   <>
    <CatalogPage products={res?.data?.products} />
   </>
  )
}

export default page