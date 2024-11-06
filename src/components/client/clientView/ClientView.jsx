import React from 'react'
import ClientNavbar from '../clientNavbar/ClientNavbar'
import Footer from '../../shared/footer/Footer'
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
