import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.your-dialog-classname {
    display: block; 
    padding-left: 0px;
}
`;


export const Contact = () => {
    return (
        <Styles>
        <div ClassName="your-dialog-classname" style= {{width: "550px", margin: "auto", marginTop: "70px"}}>
            <h1 style= {{fontWeight: "bold"}}>Contact Me</h1>
            <br></br>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                I will never hack you I promise
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Write to me</Form.Label>
            <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        </Styles>
    )
}
