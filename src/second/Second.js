import React from 'react'
import { Nav } from 'react-bootstrap'
import "./Second.css"
const Second = () => {
  return (
    <div >
    
      <div className="bar">
      
      <Nav.Link >Posts</Nav.Link>
        <Nav.Link >Friends</Nav.Link>
        <Nav.Link >About</Nav.Link>
        
       
        <Nav.Link >Photos</Nav.Link>
        
        <Nav.Link  >Video</Nav.Link>
        <br/>
        <br/>
        </div>
    </div>
  )
}

export default Second
