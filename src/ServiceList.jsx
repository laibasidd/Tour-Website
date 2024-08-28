import React from 'react'
import './App.css'
import Overlay from './Overlay.jsx'
import Footor from './Footor.jsx'

function ServiceList() {
  return (
    <>

      <div className='response'>
        <Overlay />
        <img className='service-img' src="https://images.unsplash.com/photo-1706166483862-36234a2d308e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className='content' style={{ top: '20px', color: 'whitesmoke' }}>
          <h1>Services & Products</h1>
          <p>Our Pakistan tourism company is offering great hospitable and advance services which truly cater the needs of rejuvenating and amusing trip. Our featured services mainly include transport, snacks during traveling, staying facilities, team building activities for entertainment, meals, event photography coverage and much more in affordable price packages to ease your pocket</p>
          <div><ul>
            <li>Sightseeing tours</li>
            <li>Family and kids friendly trips</li>
            <li>Study and informational tours</li>
            <li>Corporate events and official dinners</li>
            <li>Team building activities</li>
            <li>Historical Trips</li>
            <li>Winter survival trips</li>
            <li>Weekend Trips</li>
            <li>Well conditioned transportation</li>
            <li>Hotel Booking</li>
            <li>Photography</li>
            <li>Meals, snacks, tea</li>
            <li>Base camp Expeditions</li>
            <li>Family and kids friendly trip</li>
            <li>College and University trip</li>

          </ul></div>

        </div>
        <div>
          <Footor />
        </div>

      </div>
    </>
  )
}

export default ServiceList