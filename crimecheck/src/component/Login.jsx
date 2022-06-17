import React, { useState } from 'react'
import axios  from "axios"
import { Link, useNavigate } from 'react-router-dom'




const Login = ({navname}) => {
  
  const  navigate =useNavigate()
  // const [state,SetState]=useState(false)
const [user,setUser] = useState({  
    username:"",
    password:""
})

const handleChange =e=>{
    const{id,value} =e.target

    setUser({
        ...user,
        [id]:value,

    })
}
const login  =(e) =>{
  e.preventDefault()
  axios.post("http://localhost:1211/login",{
    username:user.username,
    password:user.password
  })
  .then(res=>{
    console.log(res.data.user.username)
    navname(res.data.user)
      alert("login successful ")
          navigate("/home")
      }
     
      
  ).catch((e)=>{
    alert("Invalid login")
          console.log(e.message)
  })
}

  return (
    <div>

   
    <div className='login'>
     
  <h2>Login Here</h2>
  <form onSubmit={login}>
    <label >username</label><br />
    
    <input type="text" required id="username" value={user.username} placeholder="Enter username" onChange={handleChange} /><br />
    
    <label >password</label><br />
    <input type="password" required id="password" value={user.password} maxLength={8} placeholder="Enter user password" onChange={handleChange} /><br />
    
    <input type="submit" disabled={user.username===""||user.password===""}/> <br />
    <label className="label" htmlFor="">Don't have an account?</label>
        <Link to="/signup">Register</Link>
  </form>
   
    </div>
    </div>
  )
}

export default Login