import React from 'react'
import Header from './Header'

const Home = ({user}) => {
  console.log(`home m aaya username-${user.username}`)
  return (
    
         <div>
        <Header name={user.username} />
        <div className='img_div'>
        
        <img src="https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VsY29tZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="welcome" />
        </div></div>
  )
    
  
}

export default Home