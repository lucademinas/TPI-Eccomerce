import React from 'react'
import Navbar from '../navbar/CommonNavbar'
import Footer from '../footer/Footer'

const GeneralView = ({ children }) => {
  return (
    <div>
      <Navbar />
        <main>{children}</main>
      

      <Footer/>
    </div>
  )
}

export default GeneralView
