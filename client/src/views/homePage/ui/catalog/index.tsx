'use client'
import { GET_PRODUCTS, REMOVE_PRODUCT } from '@/entities/product'
import { GetProductQuery } from '@/shared/gql/graphql'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/navigation'
import React from 'react'


const Catalog = ({products} : {products: GetProductQuery['product'][]}) => {
    // const {data} = useQuery(GET_PRODUCTS)
    const router = useRouter()
    const [removeProduct] = useMutation(REMOVE_PRODUCT, 
      {
        refetchQueries: [GET_PRODUCTS]
      }
    )

    const handleDelete = async (id: number | null | undefined)=> {
        if(id) {
          const res = await removeProduct({variables: {id}})
          if( 'data' in res) {
            console.log('refresh')
            router.refresh()
          }

        }
    }
    
  return (
    <ul className={'grid grid-cols-4 gap-[20px] mt-[20px]'} >
        {products?.map((item)=> {
            const {id, name, description, price} = item || {}
            return <li className={'h-[280px] border border-black p-5 rounded-xl relative'} key={id} >
              <div onClick={()=> handleDelete(id)} data-name='deleteBtn' className={`absolute top-[10px] right-[10px] rounded-[50%] bg-[red] text-[white] w-[40px] h-[40px]
                flex justify-center items-center cursor-pointer
                `} >X</div>
                <h3 className={'text-center'} >{name}</h3>
            </li>
        })}
    </ul>
  )
}

export default Catalog