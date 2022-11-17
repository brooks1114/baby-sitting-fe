//import the boostrap compents we will be using on this form
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function DeleteAccountForm({ handleChange, handleSubmit, familyEmail, sitterEmail }) {

    return (
        <div className="DeleteAccount container">
               
                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="familyEmail">
                    <Form.Label><strong>Family Email:</strong></Form.Label>
                    <Form.Control required type="email" placeholder="Example@example.com" />
                </Form.Group>
                <Form.Group controlId="sitterEmail">
                    <Form.Label><strong>Sitter Email:</strong></Form.Label>
                    <Form.Control required type="email" placeholder="Example@example.com" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                              
               
            </Form>
        </div >
    )

}

export default DeleteAccountForm
