import React from 'react'
import bgimg2 from '../assets/about.mp4'
import '../App.css'
import Overlay from '../Overlay.jsx'
import Footor from '../Footor.jsx'
import style from './About.module.css'
import AboutCards from '../cardComponent/AboutCards.jsx'

function About() {
  return (
    <>
      <>
        <div className='response'>
          <Overlay />
          <video src={bgimg2} autoPlay loop muted />
          <div className={style.section}>
            <div className="row">
              <div className="col-lg-6">
                <img className='img-fluid' src="https://media.istockphoto.com/id/870378096/photo/group-happy-friends-having-fun-mountain-top.webp?b=1&s=170667a&w=0&k=20&c=4uT4vndjVid_tThcjUl5UZVLOTC-4darJmJolyj7fqE=" alt="" />
              </div>
              <div className="col-lg-6">
                <span><h2 class="animate__animated animate__slideOutUp animate__infinite animate__delay-1s animate__slower 3s">The Story About Us</h2></span>
                <p>Pakistan Travel Places is one of the best and reliable tourism company in Pakistan. To get into the traveling expedition, you’ve just got the right option. We take you higher to explore the surprising beauty of Pakistan. As a Pakistan tourism company, we introduced the best opportunities to travel with enticing and super-comfy services. So, get ready for a journey that you’ve never seen before!
                </p> <p>  We arrange a fully entertaining and exploratory journey to your desired destinations. Whether you look forward to getting around all the tourist spots of booked place or even want to focus its highlights to make the tour brief and rejoicing, every client with multiple travel priorities is welcomed at Pakistan Travel Places</p>
                <p>Do not worry if you’re confused to find the trustworthy Travel agency in Lahore, Pakistan. You can see our client’s review, we are completely different from other traveling firms. People trust on our services blindly and spreading our tour company to others.</p>
              </div>
            </div>

          </div>
          <div className='card1'>
            <AboutCards />
          </div>
          <div>
            <Footor />
          </div>
        </div>
      </>
    </>
  )

}

export default About