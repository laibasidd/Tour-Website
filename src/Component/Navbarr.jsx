import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { NavLink } from 'react-router-dom';
import '../App.css'
function Navbarr() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Navbar fixed='top' variant='dark' style={{ backgroundColor: 'rgba(0, 0, 0, .3)', zIndex: '1000' }} expand='md'>
              <Container>
                <Navbar.Brand style={{ color: '#8a1253' }}>
                  W.T<WiMoonAltFirstQuarter />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='my-nav' />
                <Navbar.Collapse id='my-nav'>

                  <Nav className='me-auto fw-bold'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/about' className='nav-link'>About Us</NavLink>
                    <NavLink to='/services' className='nav-link'>Services</NavLink>
                    <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                    
                  </Nav>
                 
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>


    </>
  )
}

export default Navbarr