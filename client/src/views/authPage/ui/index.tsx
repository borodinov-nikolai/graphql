'use client'
import { SIGN_UP } from '@/entities/auth'
import { SignUpInput } from '@/shared/gql/graphql'
import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'


export const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState<'sign-in' | 'sign-up'>('sign-in')
  const [signUp] = useMutation(SIGN_UP)
const {register, handleSubmit} = useForm<SignUpInput>({
  defaultValues: {
    login: undefined,
    email: undefined,
    password: undefined
  }
})

const onSubmit: SubmitHandler<SignUpInput> = async (data)=> {
      const res = await signUp({variables: {input: data}})
}
           
  return (
    <main>
      <div className={`xl:container mx-auto px-[15px] py-[100px] xl:px-0`}  >
        <h1 className={`text-[40px] text-center`} >{currentForm === 'sign-in' ? 'Авторизация:' : 'Регистрация:'}</h1>

      {currentForm === 'sign-in' &&  <form action="" className={'flex flex-col gap-[40px]'} >
          <div className={`flex flex-col gap-[5px]`} >
            <label htmlFor="login">Логин</label>
            <input className={'py-[5px] px-[10px] rounded-md'} id='login' {...register('login')} type="text" placeholder='Введите логин' />
          </div>
          <div className={`flex flex-col gap-[5px]`} >
            <label htmlFor="password">Пароль:</label>
            <input className={'py-[5px] px-[10px] rounded-md'} id='password' {...register('password')} type="text" placeholder='Введите пароль' />
          </div>
          <button type='submit' className={`bg-blue-800 text-[white] py-[5px] px-[10px] rounded-md`} >Авторизоваться</button>
        <p onClick={()=> setCurrentForm('sign-up')} className={`mt-[40px] text-[blue] border-b-[1px] border-[blue] w-max cursor-pointer mx-auto`} >Нет аккаунта? Зарегистрируйся</p>
        </form>}

        {currentForm === 'sign-up' &&  <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-[40px]'} >
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
        <p onClick={()=> setCurrentForm('sign-in')} className={`mt-[40px] text-[blue] border-b-[1px] border-[blue] w-max cursor-pointer mx-auto`} >Eсть аккаунт? Авторизуйся</p>
        </form>}
      </div>
    </main>
  )
}
