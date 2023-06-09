import React from 'react';
import Style from './Home.module.css'
// import Button from '../components/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import {useNavigate} from 'react-router-dom'

export default function Home() {
 const navigate = useNavigate()
function handleNavClick(){
    navigate('/registation')
}
    
  return (
    <>
    <Navbar/>
    <div className={Style.homeImg}>
       <div className={Style.homeContent}>
      <h1>IT'S ALL ABOUT WHAT YOU CAN ACHIEVE</h1>
      <span>Empower Yourself to make the changes you need to make </span> <br />
      <button className={Style.btn} onClick={handleNavClick}>Join With Us</button>
      {/* <Button onClick={handleNavClick} name='Join With Us'/> */}
      </div>

    </div>
    <Footer/>
    </>
  )
}
