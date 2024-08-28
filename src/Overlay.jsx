import React from 'react'
import './App.css'

function Overlay(props) {
  return (
    <div className='overlayy'>
{props.children}

    </div>
  )
}

export default Overlay