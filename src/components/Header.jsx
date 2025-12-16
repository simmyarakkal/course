import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div><Navbar expand="lg" className="bg-info fs-5">
      <Container>
        <img src="https://th.bing.com/th/id/OIP.fj4aNOlFqhlNCzkM7WOqnAHaHa?w=188&h=188&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="" />
        <Navbar.Brand href="#home" className='fs-1'>Course Selling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Course">Course</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link> */}
               <Nav.Link ><Link className='text-dark text-decoration-none'  to={"/"} >  Home</Link></Nav.Link>
            <Nav.Link><Link  className='text-dark text-decoration-none'  to={"/Course"}> Course</Link></Nav.Link>
            <Nav.Link><Link className='text-dark text-decoration-none'  to={"/Contact"}> Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header