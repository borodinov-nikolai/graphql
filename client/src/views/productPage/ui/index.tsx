// 'use client'
// import { GET_PRODUCT, UPDATE_PRODUCT } from '@/entities/product'
// import { GetProductQuery, UpdateProductInput } from '@/shared/gql/graphql'
// import { useMutation } from '@apollo/client'
// import { useRouter } from 'next/navigation'
// import React, { useEffect } from 'react'
// import { SubmitHandler, useForm } from 'react-hook-form'


// export const ProductPage = ({product}: {product: GetProductQuery['product']}) => {
//   const router = useRouter()
//   const {id, name, description, price} = product || {}
//   const [updateProduct] = useMutation(UPDATE_PRODUCT)
//   const {register, handleSubmit, setValue} = useForm<UpdateProductInput>({
//     defaultValues: {
//       id: 0,
//       name: undefined,
//       description: undefined,
//       price: undefined
//     }
//   })

//   useEffect(()=> {
//     id && setValue('id', id)
//     name && setValue('name', name)
//     description && setValue('description', description)
//     price && setValue('price', price)
//   }, [product])

//   const onSubmit: SubmitHandler<UpdateProductInput> = async (data)=> {
//      const res = await updateProduct({variables: {input: {...data, price: data.price ? +data.price : 0}}})
//      if('data' in res) {
//        router.refresh()
//      }
//   }


//   return (
//     <main className={`mh-[100vh]`} >
//       <div data-tw='container' className={`xl:container mx-auto px-[15px] py-[100px]`} >
//         <h2 className={`text-[40px] text-center`} >{name}</h2>
//         <form onSubmit={handleSubmit(onSubmit)} action="" className={`flex flex-col gap-[15px]`} >
//           <div data-rw='form-item' className={`flex flex-col gap-[5px]`} >
//             <label htmlFor="name">Название</label>
//             <input id='name' {...register('name')} type="text"/>
//           </div>
//           <div data-rw='form-item' className={`flex flex-col gap-[5px]`} >
//             <label htmlFor="description">Описание</label>
//             <input id='description' {...register('description')} type="text"/>
//           </div>
//           <div data-rw='form-item' className={`flex flex-col gap-[5px]`} >
//             <label htmlFor="price">Цена</label>
//             <input id='price' {...register('price')} type="number"/>
//           </div>
//           <button type='submit' className={'py-[10px] px-[25px] mx-auto bg-[#ef9920] text-[white] rounded-[10px] ' } >Сохранить</button>
//         </form>
//       </div>
//     </main>
//   )
// }
