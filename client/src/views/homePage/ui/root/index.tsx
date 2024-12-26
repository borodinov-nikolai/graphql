import React from 'react'
import AddProduct from '../addProduct'
import Catalog from '../catalog'
import { GetProductQuery } from '@/shared/gql/graphql'


export const HomePage = async ({products}: {products: GetProductQuery['product'][]}) => {  
  return (
    <main className={'bg-[#708670] mh-[100vh] pb-[80px]'} >
      <div className={'xl:container xl:mx-auto px-3 xl:px-0 pt-[100px] '} >
        <AddProduct/>
        <Catalog products={products} />
      </div>
    </main>

  )
}
