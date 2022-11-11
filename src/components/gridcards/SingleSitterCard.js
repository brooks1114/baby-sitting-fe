import Card from 'react-bootstrap/Card';

export default function SingleSitterCard(props) {

    return (
        <div className="card">
            <div className="SitterCard">
                <Card.Body>
                    <Card.Title>{props.sitter.email}</Card.Title>
                    <Card.Text>
                        email {props.sitter.email}
                        firstName {props.sitter.firstName}
                        hourlyRate {props.sitter.hourlyRate}
                        lastName {props.sitter.lastName}
                        maxKidsWillingToWatch {props.sitter.maxKidsWillingToWatch}
                        rating {props.sitter.rating}
                    </Card.Text>
                </Card.Body>
            </div>
        </div>
    )
}