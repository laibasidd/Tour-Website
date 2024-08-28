import React from 'react'
import Navbarr from './Component/Navbarr.jsx'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Services from './Component/Services.jsx'
import PageNot from './Component/PageNot.jsx'
import ServiceList from './ServiceList.jsx'
import Packages from './Component/Packages.jsx'
import Contact from './Component/Contact.jsx'

function Header() {
  return (
    <div>
 <BrowserRouter>
       <Navbarr/>
      
       <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
         <Route path='/services' element={<Services/>}/> 
       <Route path='*' element={<PageNot/>}/>
        <Route path='/servicelist' element={<ServiceList/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/package' element={<Packages/>}/>
   </Routes>
  
       </BrowserRouter>  

    </div>
  )
}

export default Header