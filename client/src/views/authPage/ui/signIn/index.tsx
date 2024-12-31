'use client'
import { SIGN_IN } from '@/entities/auth'
import { GET_ME } from '@/entities/users'
import { SignInInput } from '@/shared/gql/graphql'
import { useMutation } from '@apollo/client'
import { redirect } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const SignIn = () => {
    const [signIn] = useMutation(SIGN_IN,
        {
          refetchQueries: [GET_ME]
        }
    )

        const { register, handleSubmit} = useForm<SignInInput>({
            defaultValues: {
              email: undefined,
              password: undefined
            }
          })

    const handleSignIn: SubmitHandler<SignInInput> = async (data) => {
        const res = await signIn({variables: {input: data}})
        const token = res?.data?.signIn?.jwt
        if(token) {
          localStorage.setItem('jwt', token)
          redirect('/')
        }
      }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className={'flex flex-col gap-[40px]'} >
    <div className={`flex flex-col gap-[5px]`} >
      <label htmlFor="login">Email</label>
      <input className={'py-[5px] px-[10px] rounded-md'} id='login' {...register('email')} type="text" placeholder='Введите email' />
    </div>
    <div className={`flex flex-col gap-[5px]`} >
      <label htmlFor="password">Пароль:</label>
      <input className={'py-[5px] px-[10px] rounded-md'} id='password' {...register('password')} type="text" placeholder='Введите пароль' />
    </div>
    <button type='submit' className={`bg-blue-800 text-[white] py-[5px] px-[10px] rounded-md`} >Авторизоваться</button>
  </form>
  )
}

export default SignIn