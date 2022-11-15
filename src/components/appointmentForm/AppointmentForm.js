//import the boostrap compents we will be using on this form
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function AppointmentForm({ handleChange, handleSubmit, formData, isUpdate }) {

    return (
        <div className="AppointmentForm container">

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="familyEmail">
                    <Form.Label><strong>Family Email:</strong></Form.Label>
                    <Form.Control required disabled onChange={handleChange} value={formData.familyEmail} type="email" placeholder="Example@example.com" />
                </Form.Group>
                <Form.Group controlId="sitterEmail">
                    <Form.Label><strong>Sitter Email:</strong></Form.Label>
                    <Form.Control required disabled onChange={handleChange} value={formData.sitterEmail} type="email" placeholder="Example@example.com" />
                </Form.Group>
                <Form.Group controlId="appointmentDate">
                    <Form.Label><strong>Appointment Date</strong></Form.Label>
                    <Form.Control required onChange={handleChange} value={formData.appointmentDate} type="datetime-local" />
                </Form.Group>
                <Form.Group controlId="appointmentDuration">
                    <Form.Label><strong>Number of Hours to Book:</strong></Form.Label>
                    <Form.Select onChange={handleChange} value={formData.appointmentDuration}>
                        <option >Select a Value</option>
                        <option value="1">One Hour</option>
                        <option value="2">Two Hours</option>
                        <option value="3">Three Hours</option>
                        <option value="4">Four Hours</option>
                        <option value="5">Five Hours</option>
                        <option value="6">Six Hours</option>
                        <option value="7">Seven Hours</option>
                        <option value="8">Eight Hours</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    )

}

export default AppointmentForm
