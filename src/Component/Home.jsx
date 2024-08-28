import React from 'react'
import bgimg1 from '../assets/web.mp4'
import '../App.css'
import Overlay from '../Overlay.jsx'
import HomeCard from '../cardComponent/HomeCard.jsx'
import 'animate.css';
import Footor from '../Footor.jsx'




function Home() {
  return (
    <>

      <div className='response'>
        <Overlay />
        <video src={bgimg1} autoPlay loop muted />
        <div className="content">
          <h1 class="animate__animated animate__fadeIn animate__infinite animate__delay-1s">WELCOME</h1>
          <p class="animate__animated animate__backInLeft animate__repeat-1 animate__delay-1s animate__slower">Explore the world's wonders in every corner with  unforgettable journeys and timeless memories.</p>
         {/* <h2>Make your Journey Excited with us</h2> */}
          <h3>Explore Popular Destinations</h3>
        </div>
        <div className='cardss'>
          <HomeCard />
        </div>

        <div>

          <Footor />
        </div>

      </div>
    </>

  )
}

export default Home