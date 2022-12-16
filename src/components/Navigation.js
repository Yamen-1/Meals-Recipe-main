import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import './Navigation.scss'



export default function Navigation() {

  const [isActive, setIsActive] = useState(false)

  const toggle = () =>{
    console.log('toggle activated');

    setIsActive(!isActive)

    console.log(isActive);
  }

  return (
    <div className='Navigation'>

        <h1 className={isActive ? "active x" : "x"}
         onClick={ toggle}
         >X</h1>

        <ul className={isActive? "list-item" : "list-item dis-none" }>

            <li className='items'><Link to="/" className='items-link'>Home</Link></li>

            <li className='items'><Link to={"/categories/"} >Categories</Link></li>

            <li className='items'><Link to="/" className='items-link'>Contact</Link></li>

            <li className='items'><Link to="/" className='items-link'>About</Link></li>

        </ul>

    </div>
  )
}
