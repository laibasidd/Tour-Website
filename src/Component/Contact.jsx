import React, { useState } from 'react'
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import '../App.css'
import ReCAPTCHA from "react-google-recaptcha";
import Footor from '../Footor.jsx';
import 'animate.css';

function Contact() {
    const [verify, setverify] = useState(true)
    function onChange(value) {
        console.log("Captcha value:", value);
        setverify(false)
    }
    return (
        <>
            <div style={{ marginTop: '90px' }}>
                <div>

                    <h1 class="animate__animated animate__slideInUp animate__delay-1s animate__slow	2s animate__repeat-3">Contact Us</h1>
                    <h4 class="animate__animated animate__slideInUp animate__delay-1s animate__slow	2s animate__repeat-3">Get InTouch</h4>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <h3 class="animate__animated animate__slideInUp animate__delay-1s animate__slow	2s animate__repeat-1"> <IoCall /></h3>
                            <h4>Phone</h4>
                            <p style={{ color: '#8c8c8c' }}>Talk to our representative, to inquired and book your customized trip to Pakistan</p>
                        </div>
                        <div>
                            <p style={{ color: 'blue' }}> +92 32167890</p>
                            <p style={{ color: 'blue' }}> +92 32689090</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h3 class="animate__animated animate__slideInUp animate__delay-1s animate__slow	2s animate__repeat-1"><MdOutlineMailOutline /> </h3>
                            <h4>Email</h4>

                            <p style={{ color: '#8c8c8c' }}>Write down an email to us with all your queries
                                and we will respond back with detailed reply</p>
                            <p style={{ color: 'blue' }}>  tour@gmail.com</p>



                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h3 class="animate__animated animate__slideInUp animate__delay-1s animate__slow	2s animate__repeat-1"> <FaLocationArrow /></h3>
                            <h4>Location</h4>
                            <p style={{ color: '#8c8c8c' }}>Pakistan Office : 10-B, DHA Phase 1, Nishtar-e-Pakistan Rd, Karachi</p>
                        </div>
                    </div>
                </div>
                <h2>Leave Us Your Info</h2>
                <h4>We Will Get Back to You</h4>
                <div className='user-info'>


                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Your Name</label>
                            <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3" >
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                            />,
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-primary" disabled={verify}>Submit</button>
                    </form>





                </div>
                <div>
                    <Footor />
                </div>
            </div>

        </>
    )
}

export default Contact