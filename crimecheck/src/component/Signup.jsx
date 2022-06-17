import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
const Signup = () => {
 
  const navigate =useNavigate()
  const [user,setUser] = useState({
      username:"",
      email:"",
      phone: "",
      password:"",
      checkpass:""
  })
//const [name,SetName]=useState("")
  const [errorMessage, setErrorMessage] = useState('')
 
  const validate = (value,id) => {
 
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      // handleChange()
      setUser({...user,
        [id]:value})
      setErrorMessage('Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }




  const handleChange =e=>{
  
      const{id,value} =e.target

      setUser({
          ...user,
          [id]:value,
  
      })
  }

  const register   =(e)=>{
    e.preventDefault()
    if(user.password===user.checkpass){
      axios.post("http://localhost:1211/register",user).then(res=>{
        console.log(res.data.user)
        
         alert("register succesfull")
         //navname(res.data.user)
       navigate("/")
       return;
 
 }).catch((err)=>{
   alert("pls try diffrent mail or username")
   console.log(err)
 })
    }
    else{
      alert("password not macth")
  
    }
     
  }
 
  
  return (
    <div>
  
    <div className='signup' >
       <h2>register</h2>
       <form onSubmit={register}>
       <label >User Name</label><br />
    <input type="text" required id="username" value={user.username} placeholder="Enter user name" onChange={handleChange} /><br />
    <label >Email</label><br />
    <input type="email" required id="email" value={user.email} placeholder="Enter Email" onChange={handleChange} /><br />
    <label >Phone no.</label><br />
    <input type="text" required id="phone"  maxLength={10} minLength={10} value={user.phone} placeholder="Enter phone no." onChange={handleChange} /><br />
    <label >password</label><br />
    <input type="text" required id="password" maxLength={8} placeholder="Enter password" onChange={(e) => validate(e.target.value,e.target.id)} /><br />

    {errorMessage === '' ? null :
        <span style={{
          color: 'red',
        }}>{errorMessage}</span>}
        <br />

    <label >confirm-password</label><br />
    <input type="password" required placeholder="Enter password again" id="checkpass"  value={user.checkpass}  onChange={handleChange} /><br />
    
    <input type="submit"  />
            </form>
    </div></div>
  )
}

export default Signup