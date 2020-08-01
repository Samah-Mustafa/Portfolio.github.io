import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';

// import './ContactUs.css';

// const Styles = styled.div`
// .your-dialog-classname {
//     display: block; 
//     padding-left: 0px;
// }
// `;


export const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template2', e.target, 'user_a8vtwSAHyCvf5fim9Sbv4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        
        <div ClassName="your-dialog-classname"
        style= {{width: "550px", margin: "0 auto", marginTop: "70px", }}>

            <h1 style= {{fontWeight: "bold"}}>Contact Me</h1>
            <br></br>
            <Form onSubmit={sendEmail}>

            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Write to me</Form.Label>
            <Form.Control as="textarea" rows="3" name="message"/>
            </Form.Group>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
            
            </Form>
            
        </div>
       
    )
}