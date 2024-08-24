import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [input, setInput] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const userdata = "JJcollage";
    const userpass = "12345"
    if (input === userdata && password === userpass) {
      console.log('sucess')
      navigate("/section")
    }
    else {
      console.log("login failed")
    }
  }

  return (
    <div>
      <h1 className='text-3xl font-medium'>Staff Login</h1>
      <form onSubmit={handleClick}>
        <label htmlFor="username">UserName:</label>
        <input type="text" className='border border-black mt-10' value={input} onChange={handleInput} /><br />

        <label htmlFor="password">Password</label>
        <input type="password" className='border border-black' value={password} onChange={handlePassword} /><br />

        <button className='border border-black'>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage