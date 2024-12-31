'use client'
import { REMOVE_PRODUCT } from '@/entities/product'
import { Product } from '@/shared/gql/graphql'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import qs from 'querystring'

const Catalog = ({products}: {products?: Product[]}) => {
  const router = useRouter()
   const [removeProduct] = useMutation(REMOVE_PRODUCT)
   const [sort, setSort] = useState<string>('asc')

   const handleRemove = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number)=> {
         e.stopPropagation()
          const res = await removeProduct({variables: {input: id}})
         if('data' in res) {
          router.refresh()
         }
   }

   useEffect(()=> {
    const query = qs.stringify({sort})
    router.push(`/catalog?${query}`)
   }, [sort])

  
    
  return (
    <div>
            <div className={'flex justify-between'} >
        <input type="text" />
        <select onChange={(e)=> setSort(e.target.value)}  name="" id="">
          <option value="asc">По возврастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </div>
      <ul className={'grid grid-cols-4 gap-[20px] mt-[20px]'} >
          {products?.map(({id, name, price})=> (
            <li onClick={()=> router.push(`/catalog/${id}`)} className={` relative h-[250px] border border-black rounded-xl p-[15px]`} key={id} >
              <div onClick={(e)=> handleRemove(e, id)} className={` cursor-pointer absolute top-[10px] right-[10px] border text-[red] border-red-500 w-[25px] h-[25px]
                flex items-center justify-center rounded-[50%]
                `} data-tw='delete_btn' ><svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="red"/></svg></div>
            <p className={`text-center`} >{name}</p>
            <p className={``} >{price}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Catalog