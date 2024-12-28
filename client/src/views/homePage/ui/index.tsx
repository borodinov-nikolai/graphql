import { redirect } from 'next/navigation'
import React from 'react'


export const HomePage = () => {
    redirect('/auth')
  
  return (
    <div>HomePage</div>
  )
}
