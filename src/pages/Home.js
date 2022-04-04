import React from 'react'
import withLayout from "./withLayout"
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div>
    <div className='banner'>
    <h1>Welcome to my webpage</h1>
    <p>this is a website about myself. i love programming and i am willing to teach anyone who wishes to learn as well</p>
<div className='actiona-wrap'>
<button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
<button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blogs</button>
  
      </div>
      </div>
      </div>
  )
}  
      

export default withLayout (Home)