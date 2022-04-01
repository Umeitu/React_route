import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/blog/Blog'
import {Routes, Route, Navigate} from "react-router-dom"

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path='*' element={<Navigate to="/"/>} />
    </Routes>
  )
}

export default App