// 'use client'
// import { CreateProductInput } from '@/shared/gql/graphql'
// import { useMutation } from '@apollo/client'
// import { useRouter } from 'next/navigation'
// import React from 'react'
// import { SubmitHandler, useForm } from 'react-hook-form'




// const AddProduct = () => {
//   const router = useRouter()
//    const [createProduct] = useMutation(CREATE_PRODUCT, {
//     refetchQueries: [GET_PRODUCTS]
//    })

//     const {register, handleSubmit, reset} = useForm({
//       defaultValues: {
//         name: '',
//         description: '',
//         price: 0
//       }
//     })


//     const onSubmit: SubmitHandler<CreateProductInput> = async (data)=> {
//       const res = await createProduct({variables: {input: {...data, price: +data.price}}})
//       if('data' in res) {
//         reset()
//         router.refresh()
//       }

//     }

//   return (
//     <div>
//     <h2 className={'text-[40px] text-center'} >Добавить продукт</h2>
//     <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-5'} action="">
//       <div className={'flex flex-col gap-1'} >
//         <label className={'text-sm text-[gray]'} htmlFor="name">Название</label>
//         <input {...register('name')} className={'py-1 px-2 rounded-[5px]'} id='name' type="text" placeholder='Введите название' />
//       </div>
//       <div className={'flex flex-col gap-1'} >
//         <label className={'text-sm text-[gray]'} htmlFor="desc">Описание</label>
//         <input {...register('description')} className={'py-1 px-2 rounded-[5px]'} id='desc' type="text" placeholder='Введите описание' />
//       </div>
//       <div className={'flex flex-col gap-1'} >
//         <label className={'text-sm text-[gray]'} htmlFor="price">Цена</label>
//         <input {...register('price')} className={'py-1 px-2 rounded-[5px]'} id='price' type="number"  />
//       </div>
//       <button type='submit' className={'py-[10px] px-[25px] mx-auto bg-[#ef9920] text-[white] rounded-[10px] ' } >Создать</button>
//     </form>
//     </div>
//   )
// }

// export default AddProduct