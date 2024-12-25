import React from 'react'
import AddProduct from '../addProduct'
import Catalog from '../catalog'


export const HomePage = async () => {  
  return (
    <main className={'bg-[#708670] h-[100vh]'} >
      <div className={'xl:container xl:mx-auto px-3 xl:px-0 pt-[100px] '} >
        <AddProduct/>
        <Catalog/>
      </div>
    </main>

  )
}
