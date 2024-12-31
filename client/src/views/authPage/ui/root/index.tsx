'use client'
import React, { useState } from 'react'
import SignUp from '../signUp'
import SignIn from '../signIn'


export const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState<'sign-in' | 'sign-up'>('sign-in')


  return (
    <main>
      <div className={`xl:container mx-auto px-[15px] py-[100px] xl:px-0`}  >
        <h1 className={`text-[40px] text-center`} >{currentForm === 'sign-in' ? 'Авторизация:' : 'Регистрация:'}</h1>
       {
        currentForm === 'sign-up' ? <SignUp/> : <SignIn/>
       }
        {currentForm === 'sign-up' ? <p onClick={() => setCurrentForm('sign-in')} className={`mt-[40px] text-[blue] border-b-[1px] border-[blue] w-max cursor-pointer mx-auto`} >
          Eсть аккаунт? Авторизуйся
          </p> 
          :
          <p onClick={() => setCurrentForm('sign-up')} className={`mt-[40px] text-[blue] border-b-[1px] border-[blue] w-max cursor-pointer mx-auto`} >
          Нет аккаунта? Зарегистрируйся
          </p> 
          }
      </div>
    </main>
  )
}
