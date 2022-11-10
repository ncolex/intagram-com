import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import StoreContext from "../Context/UserContextStore"


const Dashboard = () => {
  const { email, username } = useContext(StoreContext);

  return (
    <div className='h-screen w-full flex items-center justify-start flex-col'>
      <h1 className='mb-10 mt-40'> Hello! {username} &nbsp; {email} &nbsp; You have Sucessfully loggedin</h1>
      <Link to='/'><button className='h-16 w-40 rounded bg-cyan-500 hover:bg-red-400 text-white font-bold drop-shadow-2x '>Logout</button></Link>
    </div>
  )
}

export default Dashboard;