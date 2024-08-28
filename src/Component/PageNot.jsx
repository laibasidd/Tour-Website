import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNot() {
 const navigates =  useNavigate()
 const handleClick = ()=>{
navigates(-1)
 }

 
  return (
    <>
    <div style={{marginTop: '100px'}}>
      <center>


    <h4>404</h4>
    <h3>Page Not Found</h3>
    <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button" onClick={handleClick}> GO BACK</button>
  
</div>
    
      </center>

    </div>
    
    </>
  )
}

export default PageNot