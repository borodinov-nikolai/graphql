import { GET_PRODUCTS } from '@/entities/product'
import { Sort } from '@/shared/gql/graphql'
import { getApolloClient } from '@/shared/libs/getApolloClient'
import { CatalogPage } from '@/views/catalogPage'
import React from 'react'


const page = async ({searchParams}: {searchParams: Promise<{sort?: Sort}>}) => {
   const sort = (await searchParams).sort
   const client = getApolloClient()
   const res = await client.query({query: GET_PRODUCTS, variables: {sort}})
  return (
   <>
    <CatalogPage products={res?.data?.products} />
   </>
  )
}

export default page