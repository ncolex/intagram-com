import React from 'react'
import { Footer } from '../Common/Footer/footer'
import Images from '../Login/images'
import Login from '../Login/login'

export const Index = () => {
  return (
    <div className='h-fit -ml-20 -mt-10 w-screen bg-gray-50 flex flex-col'>
      <div className=' w-8/12 ml-40 mt-10  h-auto flex flex-row'>
        <Images />
        <Login />
      </div>
      <Footer />
    </div>
  )
}
