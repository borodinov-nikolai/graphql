'use client'
import { SIGN_OUT } from '@/entities/auth'
import { GET_ME } from '@/entities/users'
import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const navItems = [
  {
    label: 'Главная',
    href: '/'
  },
  {
    label: 'Каталог',
    href: '/catalog'
  }
]

export const Header = () => {
  const router = useRouter()
  const {data, loading} = useQuery(GET_ME)
  console.log(loading, data)
  const [signOut] = useMutation(SIGN_OUT,
    {
      refetchQueries: [GET_ME]
    }
  )

  

  const handleLogOut = async ()=> {
    await signOut()
    localStorage.removeItem('jwt')
    router.refresh()
  }

   if(!loading) return (
    <header  >
        <div className={` h-[40px] flex justify-between items-center px-[15px] xl:container xl:mx-auto xl:px-0`} >
          <div className={`font-bold cursor-pointer`} >Graphql</div>
          <nav className={`h-full list-none flex gap-[40px] items-center`} >
            {
              navItems.map(({label, href})=> (
                <li key={href} className={`h-full`} >
                  <Link href={href} className={`h-full flex items-center`} >{label}</Link>
                </li>
              ))
            }
          </nav>
         { data?.getMe?.id ? <button onClick={handleLogOut} >Выйти</button> : <Link href={'/auth'} >Аторизация</Link> }
        </div>
    </header>
  )
}
