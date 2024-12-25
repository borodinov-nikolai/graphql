'use client'
import { GET_PRODUCTS } from '@/entities/product'
import { useQuery } from '@apollo/client'
import React from 'react'


const Catalog = () => {
    const {data} = useQuery(GET_PRODUCTS)
    
  return (
    <ul className={'grid grid-cols-4 gap-[10px] mt-[20px]'} >
        {data?.products?.map((item)=> {
            const {id, name, description, price} = item || {}
            return <li className={'h-[280px] border border-black p-5 rounded-xl'} key={id} >
                <h3 className={'text-center'} >{name}</h3>
            </li>
        })}
    </ul>
  )
}

export default Catalog