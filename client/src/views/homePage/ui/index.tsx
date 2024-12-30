'use client'
import { GET_ME } from '@/entities/users'
import {useQuery } from '@apollo/client'
import { redirect } from 'next/navigation'
import React from 'react'


export const HomePage = () => {

    const {data, error} = useQuery(GET_ME)
    console.log(data)

    if(error) {
      redirect('/auth')
    }
  
  if(data) return (
    <div>HomePage</div>
  )
}
