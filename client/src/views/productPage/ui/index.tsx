'use client'
import { GetProductQuery } from '@/shared/gql/graphql'
import React from 'react'


export const ProductPage = ({product}: {product: GetProductQuery['product']}) => {
  const {id, name, description, price} = product || {}
  return (
    <main className={`mh-[100vh]`} >
      <div data-tw='container' className={`xl:container mx-auto px-[15px] py-[100px]`} >
        <h2 className={`text-[40px] text-center`} >{name}</h2>
      </div>
    </main>
  )
}
