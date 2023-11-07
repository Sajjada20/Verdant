import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './stylesComp/navbar.css'
import { menu, close } from '../assets/assets';


function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [location])

  return (
    <div className='navbar'>
        <div className='div-navbar'>
            <h1 onClick={() => navigate('/')}>Verdant</h1>
            <div className='div-links'>
                <Link id='links' to={'/'}> home</Link>
                <Link id='links' to={'/shop'}> Shop</Link>
                <Link id='links' to={'/checkout'}> checkout</Link>
            </div>
            <div className={open ? 'div-links-mobile' : 'display-none'}>
                <Link id='links-mobile' to={'/'}> home</Link>
                <Link id='links-mobile' to={'/shop'}> Shop</Link>
                <Link id='links-mobile' to={'/checkout'}> checkout</Link>
            </div>
            <div onClick={() => setOpen((prevBool) => !prevBool)} className='div-navbar-icon'>
                <img src={!open ? menu : close} alt="icon" />
            </div>
        </div>
    </div>
  )
}

export default Navbar