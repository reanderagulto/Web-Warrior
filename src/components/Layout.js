import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <NavBar />
      <div className='content'>
        { children }
      </div>
      <Footer />
    </div>
  )
}
