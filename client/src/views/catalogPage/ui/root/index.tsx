import React from 'react'
import AddProduct from '../addProduct'
import Catalog from '../catalog'



export const CatalogPage = async () => {  
  return (
    <main className={'mh-[100vh]'} >
      <div className={'xl:container xl:mx-auto px-[15px] xl:px-0 py-[100px] '} >
        <AddProduct/>
        <Catalog />
      </div>
    </main>

  )
}
