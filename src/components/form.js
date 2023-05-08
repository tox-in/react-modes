import React from 'react'
import '../App.css'

function Form() {
  return (
    <div className='main'>
       <p className='sign' align="center">
           Sign in
       </p>
       <form className='form1'>
        <input className='username' type='text' placeholder='Username' />
        <br/>
        <input className='password' type='password' placeholder='password' />
        <br/>
        <a href=' ' className='submit' align='center'>
            Sign in
        </a>
        <br/>
        <p className='forgot'>
            <a href=' ' >Forgot password?</a>
        </p>
       </form>
    </div>
  )
}

export default Form