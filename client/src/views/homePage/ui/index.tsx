import { redirect } from 'next/navigation'
import React from 'react'


export const HomePage = () => {
    redirect('/catalog')
  
  return (
    <div>HomePage</div>
  )
}
