import React from 'react'
import Navbar from '../shared/navbar/CommonNavbar'
import Footer from '../shared/footer/Footer'

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
