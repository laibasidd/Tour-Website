import React from 'react'
import { useNavigate } from 'react-router-dom'


function ServiceCard() {
  const cards = [
    { id: '1', image: 'https://c.stocksy.com/a/yQh500/z9/1358604.jpg', title: 'Family Tour' },
    { id: '2', image: 'https://t4.ftcdn.net/jpg/02/26/04/95/360_F_226049552_dvJaPCFhimr41QVSixOD6fFkUrCZIqum.jpg', title: 'Group Tour' },
    { id: '3', image: 'https://i.pinimg.com/736x/f5/78/95/f5789595bf1d83da078b2ecd883137d3.jpg', title: 'Honey Moon' },
  ]
  const navigate = useNavigate()

  return (
    <div>
      <div className="row">
         {cards.map((card) => (
          <div key={card.id} className='col-sm-4 mt-3'>
            <div className="card position-relative">
              <img src={card.image} className="card-img-top"/>
              <div className="card-body position-absolute top-50 start-50 translate-middle text-center">
                <h5 className="card-title text-white fw-bold animate__animated animate__bounceInLeft animate__repeat-11 animate__slow	2s " style={{ fontSize: '30px' }}>{card.title}</h5>
                <button className='btn1 animate__animated animate__heartBeat animate__delay-1s animate__infinite' onClick={()=> navigate('/package')}>packages</button>
              </div>
            </div>
          </div>
        ))}
        




      </div>

    </div>
  )
}

export default ServiceCard