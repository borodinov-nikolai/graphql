import { GET_PRODUCT } from '@/entities/product'
import { getApolloClient } from '@/shared/libs/getApolloClient'
import { ProductPage } from '@/views/productPage'
import React from 'react'


const page = async ({params}: {params: Promise<{id: string}>}) => {
  const client = getApolloClient()
  const id = +(await params).id
  const {data} = await client.query({query: GET_PRODUCT, variables: {id}})
  return (
    <>
    <ProductPage product={data.product} />
    </>
  )
}

export default page