'use client'
import { GET_PRODUCTS, REMOVE_PRODUCT } from '@/entities/product'
import { Product } from '@/shared/gql/graphql'
import { useMutation, useQuery } from '@apollo/client'
import React from 'react'

const Catalog = ({products}: {products?: Product[]}) => {
   const [removeProduct] = useMutation(REMOVE_PRODUCT,
    {
      refetchQueries: [GET_PRODUCTS]
    }
   )
   const {data} = useQuery(GET_PRODUCTS)

   const handleRemove = async (id: number)=> {
          const res = await removeProduct({variables: {input: id}})
   }
    
  return (
    <div>
            <div className={'flex justify-between'} >
        <input type="text" />
        <select  name="" id="">
          <option value="asc">По возврастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </div>
      <ul className={'grid grid-cols-4 gap-[20px] mt-[20px]'} >
          {data?.products?.map(({id, name, description, price})=> (
            <li className={` relative h-[250px] border border-black rounded-xl p-[15px]`} key={id} >
              <div onClick={()=> handleRemove(id)} className={` cursor-pointer absolute top-[10px] right-[10px] border text-[red] border-red-500 w-[25px] h-[25px]
                flex justify-center items-center rounded-full
                `} data-tw='delete_btn' >x</div>
            <p className={`text-center`} >{name}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Catalog