import React from 'react'
import ClientNavbar from '../clientNavbar/ClientNavbar'
import Footer from '../footer/Footer'

const ClientView = ({ children }) => {
  return (
    <div>
      <ClientNavbar />
        <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default ClientView
