'use client'
import { SIGN_UP } from '@/entities/auth'
import { GET_ME } from '@/entities/users'
import { SignUpInput } from '@/shared/gql/graphql'
import { useMutation } from '@apollo/client'
import { redirect } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const SignUp = () => {
    const { register, handleSubmit} = useForm<SignUpInput>({
        defaultValues: {
          login: undefined,
          email: undefined,
          password: undefined
        }
      })
        const [signUp] = useMutation(SIGN_UP,
          {
            refetchQueries: [GET_ME]
          }
        )

         const onSubmit: SubmitHandler<SignUpInput> = async (data) => {
            const res = await signUp({ variables: { input: data } })
            const token = res?.data?.signUp?.jwt
            if (token) {
              localStorage.setItem('jwt', token)
              redirect('/')
            }
          }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-[40px]'} >
    <div className={`flex flex-col gap-[5px]`} >
      <label htmlFor="login">Логин</label>
      <input className={'py-[5px] px-[10px] rounded-md'} id='login' {...register('login')} type="text" placeholder='Введите логин' />
    </div>
    <div className={`flex flex-col gap-[5px]`} >
      <label htmlFor="email">Email</label>
      <input className={'py-[5px] px-[10px] rounded-md'} id='email' {...register('email')} type="text" placeholder='Введите email' />
    </div>
    <div className={`flex flex-col gap-[5px]`} >
      <label htmlFor="password">Пароль:</label>
      <input className={'py-[5px] px-[10px] rounded-md'} id='password' {...register('password')} type="text" placeholder='Введите пароль' />
    </div>
    <button type='submit' className={`bg-blue-800 text-[white] py-[5px] px-[10px] rounded-md`} >Зарегистрироваться</button>
   
  </form>
  )
}

export default SignUp