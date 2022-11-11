import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import SingleSitterCard from "../gridcards/SingleSitterCard";


function GridCardsSittersHook(props) {

    const [sitters, setSitters] = useState([])

    const getSitters = () => {
        fetch("http://localhost:5000/api/sitters")
            .then((response) => response.json())

            .then((sitterData) => {
                console.log(sitterData)
                setSitters(sitterData)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    useEffect(() => {
        getSitters()
    }, [])

    return (
        <div className="GridCardsSitters container mb-3">
            <h1>Your Sitter Search Results</h1>
            <Row xs={1} lg={3} className="g-4">
                {sitters.map((sitter, idx) => (
                    <Col key={idx}>

                        <SingleSitterCard
                            sitter={sitter}
                        />

                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default GridCardsSittersHook;
