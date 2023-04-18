import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Style from './Navbar.module.css';
import {HiMenu,HiMenuAlt3 } from 'react-icons/hi';


export default function Navbar() {
    const navigate = useNavigate()
    const[isMobile, setIsMobile] = useState(false)
    const loginStatus = JSON.parse(localStorage.getItem('loggedin'))

    function handleLogout(){
        localStorage.removeItem('loggedin')
        navigate('/login')
    }
    return (
        <nav>
            <div className={Style.main_Navdiv}>
                <div className={ isMobile ? Style.mobileIcon :  Style.logo}>
                    <Link to='/'> <h1>GYM</h1> </Link>
                </div>
                <div className={isMobile ? Style.icon : Style.hideIcon}>
                  <h1> NGE<span>GYM</span>💪 </h1>
                </div>
                <div >
                    <ul className={isMobile ? Style.mobileIcon :  Style.link_div}>

                        <Link to='/aboutUs'><li>About Us</li></Link>
                        <Link to='/programs'><li>Program</li></Link>
                        <Link to='/training'><li>Training</li></Link>
                        <Link to='/pricing'><li>Pricing</li></Link>

                    </ul>
                </div>
                <div className={Style.btn_div} >
                    { loginStatus ? <button className={isMobile ? Style.mobileIcon :  Style.btn} onClick={handleLogout} >Logout</button> : <button className={isMobile ? Style.mobileIcon :  Style.btn} onClick={() => navigate('/login')}>Login</button>}
                </div>
                <div className={Style.menuIcon} >

                    {isMobile ? <HiMenuAlt3 onClick={()=>setIsMobile(false)}/> : <HiMenu onClick={()=>setIsMobile(true)}/> }
                     
                    
                </div>
            </div>
            
        </nav>
    )
}
