'use client'
import { GET_ME } from '@/entities/users'
import { useQuery } from '@apollo/client'
import { redirect } from 'next/navigation'
import React from 'react'


export const HomePage = () => {

    const {data, error} = useQuery(GET_ME)


   
  
  return (
    <div>HomePage</div>
  )
}
