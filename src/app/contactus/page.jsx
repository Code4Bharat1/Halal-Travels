import Contactus from '@/components/Contactus/Contactus'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>  
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default page
