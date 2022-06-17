import React, { useState } from 'react'
 import {Link} from 'react-router-dom'
const Header = ({name}) => {

 

  return (
    <>
    <div className='header' >
        <Link to="/home" style={{  color: "#fff", textDecoration: "none"}}><p>Home</p></Link>
        <p>hello {name}</p>

    </div>
    <div>

    </div>
    </>
  )
}

export default Header