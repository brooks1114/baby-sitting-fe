import {Button, Card} from 'react-bootstrap';
import './Card.css';

export default function AppointmentCard(props) {

    const dateFull = new Date(props.appointment.appointmentDate)
    const date = dateFull.toDateString();
    const time = dateFull.getHours() + ":" + dateFull.getMinutes()

    return (
        <div className="card">
            <div className="status">
                {props.appointment.appointmentStatus === "Accepted" ? <div className="accepted">Accepted</div>
                    : props.appointment.appointmentStatus === "Declined" ? <div className="declined">Declined</div>
                        : props.appointment.appointmentStatus === "Pending" ? <div className="pending"> Pending</div>
                            : <> </>
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
                <Button> Cancel</Button>
            </div>
        </div>
    )
}

/*


sitterEmail
"sitter@sitter.com"
familyEmail
"megan@megan.com"
appointmentDate
2022-11-16T00:00:00.000+00:00
appointmentDuration
2
appointmentStatus



*/
