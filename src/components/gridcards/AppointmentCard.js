import Card from 'react-bootstrap/Card';
import './Card.css'

export default function AppointmentCard(props) {
    return (
        <Card.Body>
            <div className="status">{props.appointment.appointmentStatus === "Accepted" ? <></> : props.appointment.appointmentStatus === "Declined" ? <></> : props.appointment.appointmentStatus === "Pending" ? <></> : <> </>}</div>
            <Card.Title>
                <div className="name mb-1 fw-500 text-center">{props.appointment.familyEmail}</div>
            </Card.Title>
            <Card.Text>
                <div className="date"><h4>Date:</h4>{props.appointment.appointmentDate}</div>
                <div className="duration"><h4>Duration:</h4>{props.appointment.appointmentDuration}</div>
            </Card.Text>
        </Card.Body >
    )
}