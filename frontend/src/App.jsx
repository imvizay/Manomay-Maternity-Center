// index.css
import '@styles/globals.css'
import '@/index.css'

// hooks
import { useState,useEffect } from "react"
// components
import Loader from "@/components/loader/Loader"
// framer motion
import { AnimatePresence } from "framer-motion"
// cursor
import Cursor from '@/components/common/Cursor.jsx'

import { useNavHover } from './hooks/useNavbarHover'
import Navbar from '@/components/layout/Navbar'

// sections compos
import Hero from '@sections/hero/HeroSection' // Onboarding hero vw
import About from "@sections/about/About.jsx" // About clinic vision and morals
import Services from '@sections/services/Services.jsx' // Clinic services
import Expertise from '@sections/expertise/Expertise' // Doctor specialized in
import Experience from '@sections/experience/Experience' // Doctor experince
import Testimonials from '@sections/testimonials/Testimonial' // Patients reviews
import Appointment from '@sections/appointment/Appointment'  // Online appointment booking
import Footer from '@/components/layout/Footer'  // Usual footer section

function App() {

  const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);
    
    // cleanup fn to clear interval when app closes to avoid memory leaks.
    return () => clearInterval(timer)  
  },[])

  // useMagnetic(loading)

  useNavHover(loading)


  return (
   <>
   {/* Loading App */}
   <AnimatePresence>
    {loading && (<Loader/>)}
   </AnimatePresence>
    
  {/* Whole App  */}
   {!loading && ( 
    <div>
      <Cursor/>
      {/* Landing Page */}
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Expertise/>
      <Experience/>
      <Testimonials/>
      <Appointment/>
      <Footer/>
    </div>
    )}
   
   </>
  )
}

export default App