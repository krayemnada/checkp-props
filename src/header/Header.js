import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap'
import { Bell, Facebook, HelpCircle, Home, LogOut, Search, Settings } from 'react-feather'
import "./Header.css"

const Header = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><Facebook style= {{color : "blue"}} size="30" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"><Search/></Button>
      </Form>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"><Home/></Nav.Link>
        <Nav.Link href="#action2"><i class="fas fa-users" size='100'></i></Nav.Link>
        <Nav.Link href="#action1"><i class="fas fa-landmark"></i></Nav.Link>
        <Nav.Link href="#action1" className='side'><Bell/></Nav.Link>
        <Nav.Link href="#action1" className='side'><i class="fab fa-facebook-messenger"></i></Nav.Link>
        
        <NavDropdown  className='side' >
          <NavDropdown.Item href="#action3" ><Settings/>Settings & privacy</NavDropdown.Item>
          <NavDropdown.Item href="#action4"><HelpCircle/>Help & Support </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
          <LogOut/>Log Out
          </NavDropdown.Item>
        </NavDropdown>
        
       
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
