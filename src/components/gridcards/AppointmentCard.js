import { Alert, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

export default function AppointmentCard(props) {

    const dateFull = new Date(props.appointment.appointmentDate)
    const date = dateFull.toDateString();
    const time = dateFull.getHours() + ":" + dateFull.getMinutes()

    function handleCancelAppointment() {
        fetch(`${process.env.REACT_APP_API_URL}/api/appointments/${props.appointment._id}`, {
            method: "PUT", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ appointmentStatus: "Cancelled" })
        })
            .then((response) => response.json())

            .then((updatedApointment) => {

                alert("Your Appointment has been Cancelled")
                props.getAppointments()
            })
            .catch((error) => {
                console.log(error.message)
            });

    }

    return (
        <div className="card">
            <div className="status">
                {props.appointment.appointmentStatus === "Accepted" ? <div className="accepted">Accepted</div>
                    : props.appointment.appointmentStatus === "Declined" ? <div className="declined">Declined</div>
                        : props.appointment.appointmentStatus === "Pending" ? <div className="pending"> Pending</div>
                            : props.appointment.appointmentStatus === "Cancelled" ? <div className="cancelled"> Cancelled</div>
                                : <div>
                                </div>
                }
            </div>
            <Card.Body>
                <Card.Title>
                    <div className="name mb-1 fw-500 text-center">{props.appointment.sitterInfo.firstName}</div>
                </Card.Title>
                <Card.Text>
                    <div className="date">Date:{date}</div>
                    <div className="time">Time:{time}</div>
                    <div className="duration">Duration:{props.appointment.appointmentDuration}</div>
                    <div> Contact Sitter: {props.appointment.sitterEmail}</div>
                </Card.Text>
            </Card.Body >
            <div className="buttons">
                {props.appointment.appointmentStatus === "Cancelled" ? <div>
                </div> : <Button onClick={() => { handleCancelAppointment() }} className="btn btn-block" > Cancel </Button>}
            </div>
        </div >
    )
}
