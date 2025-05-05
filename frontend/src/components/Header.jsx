import React from 'react'
import {Link} from 'react-router-dom'
import LOGO from '../assets/logo.png'

const Header = () => {
  return (
    <>

    <div className='flex justify-between items-center shadow-sm rounded-sm p-4'>
      <div className=''> 
        <Link to='/'>
        <img src={LOGO} alt="LOGO" className="h-16" />
        </Link>
      </div>

      <div className='flex gap-4 font-bold'>
        <Link to='/'>HOME</Link>
        <Link to='/india'>INDIA</Link>
        <Link to='/world'>WORLD</Link>
        <Link to='/sports'>SPORTS</Link>
        <Link to='/business'>BUSINESS</Link>
        
      </div>

      <div className='font-bold'>
      <Link to='/login'>LOGIN</Link>
      </div>
    </div>
    
    </>
  )
}

export default Header