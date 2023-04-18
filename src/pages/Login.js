import React, { useState } from 'react'
import Style from './Login.module.css';
import {Link, useNavigate} from 'react-router-dom'

export default function Login() {
 const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const [list, setList] = useState([])

  function handleForm(e) {
    e.preventDefault()
    setEmail('')
    setPassword('')
    const loginData = JSON.parse(localStorage.getItem('users'))
    // console.log(loginData[0].email)
    if(email === loginData[0].email && password === loginData[0].password ) {
        localStorage.setItem('loggedin', true)
        navigate('/')
    } else {
        alert('wrong email or password')
    }

  }
  return (
    <div className={Style.main_login} >

        <h1>Login Page</h1>

      <form onSubmit={handleForm}>
        
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        <button className={Style.btn} type='submit'> Submit </button>
        <p> Don't Have an account?
         <Link to='/registation'>Register here</Link>
         </p>
      </form>
      
    </div>
  )
}
