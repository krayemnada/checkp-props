import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'
import { Bell,Home, Search, } from 'react-feather'
import "./Header.css"

const Header = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg" className='all'>

  <Container fluid>
    <Navbar.Brand href="#" className="face"><h4 style={{color: "blue"}}>Facebook</h4></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Facebook"
          className="me-2"
          aria-label="Search "
        />
        <Button variant="outline-success"><Search/></Button>
      </Form>
      <Nav className='nav'
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <div className='side firstbloc'>
        <Nav.Link href="#action1"><Home/></Nav.Link>
        <Nav.Link href="#action2"><i class="fas fa-users" size='100'></i></Nav.Link>
        <Nav.Link href="#action1"><i class="fas fa-landmark"></i></Nav.Link>
        </div>
        <div className='side'>
        <Nav.Link href="#action1"><Bell/></Nav.Link>
        
        <Nav.Link href="#action1" ><i class="fab fa-facebook-messenger"></i></Nav.Link>
        
       
        </div>
        
       
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
