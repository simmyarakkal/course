import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
 
 <Card className="text-center">
      <Card.Header className=' bg-info' >Featured Courses</Card.Header>
      <Card.Body>
        <Card.Title>Special courses</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
         <Nav.Link><Link  className='text-dark text-decoration-none'  to={"/Course"}>More..</Link></Nav.Link>
       
      </Card.Body>
      <Card.Footer className="text-muted  bg-info">© 2025 Copyright: courseselling.com</Card.Footer>
    </Card> </div>
  )
}

export default Footer