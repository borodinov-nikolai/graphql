'use client'
import { REFRESH } from '@/entities/auth/api'
import { GET_ME } from '@/entities/users'
import { useMutation, useQuery } from '@apollo/client'
import { redirect } from 'next/navigation'
import React from 'react'


export const HomePage = () => {

    const me = useQuery(GET_ME)
    // const res = useQuery(REFRESH)

  console.log(me.data?.getMe.login)
  
  return (
    <div>HomePage</div>
  )
}
