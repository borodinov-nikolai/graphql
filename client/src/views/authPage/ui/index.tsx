'use client'
import React from 'react'
import { useForm } from 'react-hook-form'


export const AuthPage = () => {
  const {control, watch} = useForm({
    defaultValues: {
      name: undefined
    }
  })

  return (
    <div>AuthPage</div>
  )
}
