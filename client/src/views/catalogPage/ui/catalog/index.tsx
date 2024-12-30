'use client'
import React from 'react'

const Catalog = () => {

   

    
  return (
    <div>
            <div className={'flex justify-between'} >
        <input type="text" />
        <select  name="" id="">
          <option value="asc">По возврастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </div>
      <ul className={'grid grid-cols-4 gap-[20px] mt-[20px]'} >
  
      </ul>
    </div>
  )
}

export default Catalog