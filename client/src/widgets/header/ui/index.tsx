'use client'
import { SIGN_OUT } from '@/entities/auth'
import { GET_ME } from '@/entities/users'
import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import cs from 'classnames'

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
  const pathname = usePathname()
  const router = useRouter()
  const {data, loading} = useQuery(GET_ME)
  console.log(loading, data)
  const [signOut] = useMutation(SIGN_OUT,
    {
      refetchQueries: [GET_ME]
    }
  )

  console.log(pathname)

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
                  <Link href={ href !== pathname ? href : '#'} className={cs(`h-full flex items-center`, 
                    href === pathname && 'border-b border-[black]')} >{label}</Link>
                </li>
              ))
            }
          </nav>
         { data?.getMe?.id ? <button onClick={handleLogOut} >Выйти</button> : <Link href={'/auth'} >Аторизация</Link> }
        </div>
    </header>
  )
}
