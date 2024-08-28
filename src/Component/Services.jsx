import React from 'react'
import bgimg3 from '../assets/services.mp4'
import '../App.css'
import Overlay from '../Overlay.jsx'
import Footor from '../Footor.jsx'
import ServiceCard from '../cardComponent/ServiceCard.jsx'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import 'animate.css';




function Services() {
  return (
    <>
      <div className='response'>
        <Overlay />
        <video src={bgimg3} autoPlay loop muted />
        <div className='content' style={{ top: '10px', color: 'yellowgreen' }}>
          <h1>our services</h1>
          <p style={{ color: 'yellowgreen' }}>Our company, Pakistan Travel Places offers great hospitality and the best services to our clients that truly fulfill the needs of a refreshing and amusing trip. Come and travel with the leading and finest travel company in Lahore and visit the amazing places in Pakistan.</p>
          <NavLink to='/servicelist' style={{ textDecoration: 'none', color: 'yellowgreen' }}> <h3 class="animate__animated animate__flash animate__infinite animate__slower	1s	" ><FaArrowRight style={{ color: 'yellow' }} />
            View Our Services</h3></NavLink>

          <ServiceCard />


        </div>



      </div>
      <div>
        <Footor />
      </div>
    </>

  )
}

export default Services