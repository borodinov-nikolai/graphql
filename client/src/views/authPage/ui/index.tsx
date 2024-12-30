'use client'
import { SIGN_IN, SIGN_UP } from '@/entities/auth'
import { SignInInput, SignUpInput } from '@/shared/gql/graphql'
import { useMutation } from '@apollo/client'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'


export const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState<'sign-in' | 'sign-up'>('sign-in')
  const [signUp] = useMutation(SIGN_UP)
  const [signIn] = useMutation(SIGN_IN)
  const { register, handleSubmit, reset } = useForm<SignUpInput>({
    defaultValues: {
      login: undefined,
      email: undefined,
      password: undefined
    }
  })

  const onFormChange = (name: 'sign-in' | 'sign-up')=> {
      reset()
      setCurrentForm(name)
  }

  const handleSignUp: SubmitHandler<SignUpInput> = async (data) => {
    const res = await signUp({ variables: { input: data } })
    const token = res?.data?.signUp?.jwt
    if (token) {
      localStorage.setItem('jwt', token)
      redirect('/')
    }
  }

  const handleSignIn: SubmitHandler<SignUpInput> = async (data) => {
    const {login, ...inputData} = data
    const res = await signIn({variables: {input: inputData}})
    const token = res?.data?.signIn?.jwt
    if(token) {
      localStorage.setItem('jwt', token)
      redirect('/')
    }
  }

  return (
    <main>
      <div className={`xl:container mx-auto px-[15px] py-[100px] xl:px-0`}  >
        <h1 className={`text-[40px] text-center`} >{currentForm === 'sign-in' ? 'Авторизация:' : 'Регистрация:'}</h1>

        {currentForm === 'sign-in' && <form onSubmit={handleSubmit(handleSignIn)} className={'flex flex-col gap-[40px]'} >
          <div className={`flex flex-col gap-[5px]`} >
            <label htmlFor="login">Email</label>
            <input className={'py-[5px] px-[10px] rounded-md'} id='login' {...register('email')} type="text" placeholder='Введите email' />
          </div>
          <div className={`flex flex-col gap-[5px]`} >
            <label htmlFor="password">Пароль:</label>
            <input className={'py-[5px] px-[10px] rounded-md'} id='password' {...register('password')} type="text" placeholder='Введите пароль' />
          </div>
          <button type='submit' className={`bg-blue-800 text-[white] py-[5px] px-[10px] rounded-md`} >Авторизоваться</button>
          <p onClick={() => onFormChange('sign-up')} className={`mt-[40px] text-[blue] border-b-[1px] border-[blue] w-max cursor-pointer mx-auto`} >Нет аккаунта? Зарегистрируйся</p>
        </form>}

        {currentForm === 'sign-up' && <form onSubmit={handleSubmit(handleSignUp)} className={'flex flex-col gap-[40px]'} >
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
          <p onClick={() => onFormChange('sign-in')} className={`mt-[40px] text-[blue] border-b-[1px] border-[blue] w-max cursor-pointer mx-auto`} >Eсть аккаунт? Авторизуйся</p>
        </form>}
      </div>
    </main>
  )
}
