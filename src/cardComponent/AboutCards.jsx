import React from 'react'
import '../App.css'

import { FaLocationArrow } from "react-icons/fa";

function AboutCards() {
    const cards = [
        { id: '1', image: 'https://media.istockphoto.com/id/528152271/photo/beautiful-landscape-of-hunza-valley-in-autumn-season.webp?b=1&s=170667a&w=0&k=20&c=ICeXNzWIbay1-4d0Jr-tGQYgzBwQo9oS7LSxAqf_Sp0=', title: 'Hunza Valley' },
        { id: '2', image: 'https://media.istockphoto.com/id/1919456570/photo/snowcapped-mountain.webp?b=1&s=170667a&w=0&k=20&c=KmMCy1A8Iu3y3bEkuklgTnLTSl23oSDRQ-Xu3nX_zjU=', title: 'Gilgit Baltistan' },
        { id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0O6mBmHTr0kJyexADdfs_BBiAYXOr7AIRJoizaVo3LhiYQbaGe6lAD-owshQv_-sX40&usqp=CAU', title: 'Skardu' },
        { id: '4', image: 'https://media.istockphoto.com/id/1201343831/photo/autumn-scenery-in-pakistan.webp?b=1&s=170667a&w=0&k=20&c=VKedrECrhyEwCx1bEI6jG9uqp11MMCeL1TtKxnt-mGM=', title: 'Nathia Gali' },
        { id: '5', image: 'https://images.unsplash.com/photo-1453694595360-51e193e121fc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3clMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D', title: 'Naran' },
        { id: '6', image: 'https://images.unsplash.com/photo-1590457226842-da02b74c5ff8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Kalam Swat' },
    ]


    return (
        <>
            <div className="row">

                {cards.map((card) => (
                    <div key={card.id} className='col-md-4 mt-3'>
                        <div className="card">

                            <img src={card.image} className="card-img-top" alt="..." />
                            
                            <div className="card-body card-body position-absolute top-50 start-50 translate-middle text-center">
                                <h5 className="card-title animate__animated animate__lightSpeedInLeft animate__delay-3s animate__infinite animate__slow	2s" style={{ fontSize: '30px', color: 'rgb(129, 9, 9)'}}>{card.title}</h5>
                                <p><FaLocationArrow className='icon-color animate__animated animate__zoomIn animate__delay-3s animate__infinite' />
                               </p>

                            </div>
                        </div>
                    </div>
                ))}


            </div>

        </>
    )
}

export default AboutCards