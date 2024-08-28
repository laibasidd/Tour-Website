import React from 'react'
import './App.css'
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footor() {
  return (
    <div>
<div className="Footer fotcolor">
    <div className="container">
        <div className="row">
            <div className='col-md-6 col-lg-5 col-12'>
               <h3 className='change1'>World Tour</h3>
                <p className='change1'>Lom vero hic ducimus Lorem ipsum dolor sitvero hic ducimus Lorem ipsum dolor sitmus Lorem ipsum dolor sitvero hic ducimus Lo </p>
               
                <div className="footer-icons">
                <FaFacebook  style={{color: '#005792' , padding: '5px', fontSize: '30px'}}/>
                <FaInstagram  style={{color: '#c3195d', padding: '5px', fontSize: '30px'}}/>
                <FaTwitter style={{color: '#00bbf0' , padding: '5px', fontSize: '30px'}}/>
                </div>
            </div>
            <div className='col-md-6 col-lg-3 col-12'>
                <h5 className='change1'>Quick Links</h5>
                 <ul>
                <li className="nav-item" style={{listStyle: 'none'}}> 
                  
                  <NavLink className="nav-link" to='/'>Home</NavLink>
                </li> 
                <li className="nav-item" style={{listStyle: 'none'}}>
                <NavLink to='/about' className='nav-link'>About</NavLink>
               </li>
               <li className="nav-item"style={{listStyle: 'none'}}>
               <NavLink to='/services' className='nav-link'>Services</NavLink>
               </li> 
              
                </ul> 
            </div>
            <div className='col-md-6 col-lg-4 col-12'>
                <h5 className='change1'>Contact</h5>
                <p><FaPhone style={{color: '#66bfbf'}} />+92 3146787698</p>
                <p><MdEmail style={{color: '#eaf6f6'}}/>worldtour7@gmail.com</p>
               <p><FaLocationArrow style={{color: 'blue'}}/>Karchi,Pakistan</p>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Footor