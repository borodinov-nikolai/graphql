import { GET_PRODUCT } from '@/entities/product'
import { getApolloClient } from '@/shared/libs/getApolloClient'
import { ProductPage } from '@/views/productPage'
import React from 'react'


const page = async ({params}: {params: Promise<{id: string}>}) => {
    const id = +(await params).id
    const client = getApolloClient()
    const {data} = await client.query({query: GET_PRODUCT, variables: {input: id}})
  return (
    <>
    <ProductPage product={data?.product} />
    </>
  )
}

export default page