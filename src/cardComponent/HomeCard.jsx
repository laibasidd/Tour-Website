import React from 'react'
import '../App.css'

 import { FaLocationArrow } from "react-icons/fa";

function HomeCard() {

  const cards = [
    { id: '1', image: 'https://media.istockphoto.com/id/484221400/photo/snowy-winter-night-in-chicago.jpg?s=612x612&w=0&k=20&c=10WhOm8aaabfZX8dIsA6ew_ewl8kSFdDGovpPJuGs9U=', title: 'murrue' },
    { id: '2', image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andrei-tanase-1271619.jpg&fm=jpg', title: 'Shogran' },
    { id: '3', image: 'https://media.istockphoto.com/id/1217081362/photo/a-woman-wearing-traditional-dress-sitting-on-wall-and-looking-at-hunza-valley-in-autumn.webp?b=1&s=170667a&w=0&k=20&c=d_UiS3MiR6IhiODO89m8jPY0j1lt6lC3hawauA37zaA=', title: 'Nanga Parbat' },
    { id: '4', image: 'https://media.istockphoto.com/id/918226076/photo/family-in-snowy-winter-landscape-on-cross-country-ski.webp?b=1&s=170667a&w=0&k=20&c=b2yMg4uw_pIm5vIn9QF3FpKr0hmQx8husOi3EvkApk0=', title: 'Fairy Meadows' },
    { id: '5', image: 'https://images.unsplash.com/photo-1456441240751-2a368527053f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NjY1MjAzfHxlbnwwfHx8fHw%3D&w=1000&q=80', title: 'Galyat' },
    { id: '6', image: 'https://plus.unsplash.com/premium_photo-1685977494926-d1f8efd44c3c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25vdyUyMGF0JTIwbmlnaHR8ZW58MHx8MHx8fDA%3D', title: 'Patriata' },


  ]


  return (
    <>

      <div className="row">
        
          {cards.map((card) => (
            <div key={card.id} className='col-md-4 mt-3'>
              <div className="card" >

                <img src={card.image} className="card-img-top" alt="..." />
          
                <div className="card-body position-absolute top-50 start-50 translate-middle text-center">
                  <h5 className="card-title animate__animated animate__lightSpeedInLeft animate__delay-1s animate__repeat-2  animate__slow 2s" style={{fontSize: '30px', color: 'rgb(129, 9, 9)'}}>{card.title}</h5>
                  <p className="card-text"><FaLocationArrow  className='icon-color animate__animated animate__zoomIn  animate__delay-3s animate__infinite'/></p>

                </div>
              </div>
            </div>
          ))}




        
      </div>
    </>
  )
}

export default HomeCard
