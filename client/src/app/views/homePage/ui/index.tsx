import { GET_USERS } from '@/app/entities/user'
import { getApolloClient } from '@/app/shared/libs/getApolloClient'
import React from 'react'


export const HomePage = async () => {
  const client = getApolloClient()
  const {data: {users}} = await client.query({query: GET_USERS})
  console.log(users)
  return (
    <div className={'xl:container xl:mx-auto px-3 xl:px-0 pt-[100px]'} >
      <ul className={'flex flex-col'}  >
      {users.map((item)=> (
        <li key={item?.id} >{item?.name}</li>
      ))}
      </ul>
    </div>

  )
}
