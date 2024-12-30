import React from 'react'
import AddProduct from '../addProduct'
import Catalog from '../catalog'
import { Product } from '@/shared/gql/graphql'



export const CatalogPage = async ({products}: {products: Product[]}) => {  
  return (
    <main className={'mh-[100vh]'} >
      <div className={'xl:container xl:mx-auto px-[15px] xl:px-0 py-[100px] '} >
        <AddProduct/>
        <Catalog products={products} />
      </div>
    </main>

  )
}
