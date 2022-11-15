import Card from 'react-bootstrap/Card';
import './SingleSitterCard.css'
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default function SingleSitterCard(props) {
    let starRating = []
    for (let i = 0; i < props.sitter.rating; i++) {
        starRating.push(<div className="clip-star" key={i} ></div>)
    }

    // Set up the custome e-mail from Family to Sitter "%0d%0a" is an outlook new line requirement/syntax not jsx
    let customEmail = props.sitter.email
    let customSubject = "Questions regarding your services in Sitting"
    let customBody = "Dear " + props.sitter.firstName + ",%0d%0a%0d%0a" +
        "We would like to ask you the following questions regarding your Sitter services: %0d%0a%0d%0a" +
        "Thank you for your time,"

    let customMailTo = "mailto:" + customEmail + "?subject=" + customSubject + "&body=" + customBody

    console.log(props.sitter.rating)
    return (
        <div className="card">
            <div className="SitterCard">


                <Card.Body>
                    {/* Display an image of the Sitter */}
                    <div className="circle-image text-center">
                        <img src="https://keycom.net.au/wp-content/uploads/2018/12/t2.jpg" width="50"></img>
                    </div>
                    {/* Display the First and Last Name of the Sitter */}
                    <Card.Title>
                        <div className="name mb-1 fw-500 text-center">{props.sitter.firstName} {props.sitter.lastName}</div>
                    </Card.Title>

                    {/* Display the star rating of the Sitter */}
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                        {starRating}
                    </Row>
                    <Card.Text>

                        <div className="price">${props.sitter.hourlyRate}/hr</div>
                        <div className="price">*Up to {props.sitter.maxKidsWillingToWatch} Children</div>
                        <div className="email">
                            <a href={customMailTo}>For Questions Email: {props.sitter.firstName}</a>
                        </div>

                    </Card.Text>
                </Card.Body >
                <Link to={`/createappointment/${props.sitter.email}`} className="btn btn-block"><i className="fas fa-link"></i> Book Now</Link>
            </div >
        </div >
    )
}