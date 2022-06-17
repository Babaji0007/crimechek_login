import React, { useState } from 'react'
 import {Link} from 'react-router-dom'
const Header = ({name}) => {

 

  return (
    <>
    <div className='header' >
        <Link to="/home" style={{  color: "#fff", textDecoration: "none"}}><p>Home</p></Link>
        <p>hello {name}</p>
        {/* {
          name===""?<p>Hello Mr.</p>
          :<p>hello {name}</p>
        } */}
        
    {/* <Link to="/" style={{  color: "#fff", textDecoration: "none"}}><p>LogIn</p></Link>
    <Link to="/signup" style={{  color: "#fff", textDecoration: "none"}}><p>SignUp</p></Link> */}
   
{/* <p>Home</p>
// <p>Hello mister</p>
<p>SignUp</p> */}
    </div>
    <div>

    </div>
    </>
  )
}

export default Header