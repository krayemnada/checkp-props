import React from "react";
import { Form, FormControl, Nav } from "react-bootstrap";
import "./Second.css";
const Second = () => {
  return (
    <div>
      <div className="bar">
        <Nav.Link>Posts</Nav.Link>
        <Nav.Link>Friends</Nav.Link>
        <Nav.Link>About</Nav.Link>

        <Nav.Link>Photos</Nav.Link>

        <Nav.Link>Video</Nav.Link>
        <br />
        <br />
      </div>
      <div className="item">
        <div className="down">
          <img
            src="https://reviews.tn/wp-content/uploads/2021/05/idee-photo-profil-facebook-originale.jpg"
            alt=""
            style={{ borderRadius: "10", height: "50px", background: "white" }}
          />
          <Form >
            <FormControl
              type="search"
              placeholder="What's on your mind ?"
              className="me-2"
              aria-label="Search "
            />
          </Form>
         
            
             
          
        </div>
        <div className='bar1'>
        <Nav.Link>Live Video</Nav.Link>
              <Nav.Link>Photo Video</Nav.Link>
              <Nav.Link>Life event</Nav.Link>
              </div>
      </div>
    </div>
  );
};

export default Second;
