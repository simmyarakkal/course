import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
function Contact() {
  return (
    <div> 
      <div className='row' >
        <div className='col-6 text-center' >
        
      <img className='m-5' style={{width:"40%",height:"40%"}} src="https://static.vecteezy.com/system/resources/previews/000/453/432/original/vector-contact-us-background.jpg" />
    
        </div>
              <div className='col-6' >
         <Form className='m-3 border p-3 border-dark shadow'>
          <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
         
      </Form.Group>
      
          <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" />
         
      </Form.Group>
       
          <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text"  placeholder="Enter Address" />
         
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default Contact