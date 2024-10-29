import React from 'react'
import AdminNavbar from '../adminNavbar/AdminNavbar'
import Footer from '../footer/Footer'

const AdminView = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
        <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default AdminView;