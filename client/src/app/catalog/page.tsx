
import { getApolloClient } from '@/shared/libs/getApolloClient'
import React from 'react'


const page = async ({params, searchParams}: {params: Promise<any>, searchParams: Promise<any>}) => {
    // const client = getApolloClient()
    // const search = await searchParams
    // const {data} = await client.query({query: GET_PRODUCTS, variables: {params: search}})
   
  return (
   <>
   {/* <CatalogPage products={data?.products} /> */}
   </>
  )
}

export default page