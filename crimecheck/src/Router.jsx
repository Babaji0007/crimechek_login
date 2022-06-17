import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
const AllRouter = () => {
  const [user,setUser] = useState({})

//   const [user,setUser] = useState({
//     username:"",
//     email:"",
//     phone: "",
//     password:"",
//     checkpass:""
// })
  const navname=(data)=>{
console.log(`login in user-${data.username}`)
setUser(data)
  }
 // console.log(user)
  return (
    <div>
 
<Routes>
   
    <Route path='/' element={<Login navname={navname} />} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/home' element={<Home user={user}/>} />
</Routes>

    </div>
  )
}

export default AllRouter