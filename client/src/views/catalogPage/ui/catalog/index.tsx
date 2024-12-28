// 'use client'
// import { GET_PRODUCTS, REMOVE_PRODUCT } from '@/entities/product'
// import { GetProductQuery } from '@/shared/gql/graphql'
// import { useMutation } from '@apollo/client'
// import { useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import qs from 'querystring'

// const Catalog = ({products} : {products: GetProductQuery['product'][]}) => {
//     const router = useRouter()
//     const [sort, setSort] = useState<string>('asc')
//     const [removeProduct] = useMutation(REMOVE_PRODUCT, 
//       {
//         refetchQueries: [GET_PRODUCTS]
//       }
//     )

//     const handleDelete = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number | null | undefined)=> {
//       e.stopPropagation()
//         if(id) {
//           const res = await removeProduct({variables: {id}})
//           if( 'data' in res) {
//             console.log('refresh')
//             router.refresh()
//           }

//         }
//     }

//     console.log(sort)

//     useEffect(()=> {

//       const queryString = qs.stringify({
//        sort
//       })
 
//       router.push(`/catalog?${queryString}`)

//     }, [sort])
    
//   return (
//     <div>
//             <div className={'flex justify-between'} >
//         <input type="text" />
//         <select onChange={(e)=> setSort(e.target.value)} name="" id="">
//           <option value="asc">По возврастанию</option>
//           <option value="desc">По убыванию</option>
//         </select>
//       </div>
//       <ul className={'grid grid-cols-4 gap-[20px] mt-[20px]'} >
//           {products?.map((item)=> {
//               const {id, name, description, price} = item || {}
//               return <li onClick={()=> router.push(`/catalog/${id}`)} className={'h-[280px] border border-black p-5 rounded-xl relative cursor-pointer flex flex-col'} key={id} >
//                 <div data-tw='deleteBtn' onClick={(e)=> handleDelete(e, id)} className={`absolute top-[10px] right-[10px] rounded-[50%] bg-[red] text-[white] w-[40px] h-[40px]
//                   flex justify-center items-center cursor-pointer
//                   `} >X</div>
//                   <h3 data-tw='name' className={'text-center'} >{name}</h3>
//                   <div className={'mt-auto self-end'} >{price}</div>
//               </li>
//           })}
//       </ul>
//     </div>
//   )
// }

// export default Catalog