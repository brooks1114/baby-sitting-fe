import { Button, Card } from 'react-bootstrap';
import { generateAuthHeader } from '../../utils/authHelper';
import './Card.css';

export default function AppointmentCard(props) {

    const dateFull = new Date(props.appointment.appointmentDate)
    const date = dateFull.toDateString();
    // const time = dateFull.getHours() + ":" + dateFull.getMinutes()
    const time = dateFull.toLocaleTimeString();

    function handleCancelAppointment() {
        fetch(`${process.env.REACT_APP_API_URL}/api/appointments/${props.appointment._id}`, {
            method: "PUT", headers: {
                'Content-Type': 'application/json',
                ...generateAuthHeader()
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
    // Set up the custome e-mail from Family to Sitter 
    // "%0d%0a" is an outlook new line requirement/syntax not jsx
    let customEmail = props.appointment.sitterInfo.email
    let customSubject = "Questions regarding your services in Sitting"
    let customBody = `Dear ${props.appointment.sitterInfo.firstName},%0d%0a%0d%0a
        We would like to ask you the following questions regarding our appointment with you on ${date}: %0d%0a%0d%0a
        Thank you for your time,`

    let customMailTo = "mailto:" + customEmail + "?subject=" + customSubject + "&body=" + customBody


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
                    <div className="name mb-1 fw-500 text-center">{props.appointment.sitterInfo.firstName} {props.appointment.sitterInfo.lastName}</div>
                </Card.Title>
                <Card.Text>
                    <div className="card-text-line">
                        <Card.Title>Date: </Card.Title> {date} </div>
                    <div className="card-text-line">
                        <Card.Title>Time:</Card.Title> {time}</div>
                    <div className="card-text-line">
                        <Card.Title>Duration:</Card.Title> {props.appointment.appointmentDuration} hrs</div>
                    <div className="card-text-line">
                        <Card.Title>Contact Sitter: </Card.Title> <a className="email" href={customMailTo}> {props.appointment.sitterEmail}</a>
                    </div>
                </Card.Text>
            </Card.Body >
            <div className="buttons">
                {props.appointment.appointmentStatus === "Cancelled" ? <div>
                </div> : <Button onClick={() => { handleCancelAppointment() }} className="btn btn-block" > Cancel </Button>}
            </div>
        </div >
    )
}
