import { useCallback, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { generateAuthHeader } from '../../utils/authHelper';
import Filters from "../filter/Filters";
import SingleSitterCard from "../gridcards/SingleSitterCard";

function GridCardsSittersHook(props) {

    const [sitters, setSitters] = useState([])
    const [query, setQuery] = useState("")
    const handleCallback = useCallback((filters) => {
        let queryBuilder = "?"
        Object.keys(filters).map((key) => {
            if (filters[key]) {
                queryBuilder += `${key}=${filters[key]}&`
            }
        })
        setQuery(queryBuilder)
    }, []);

    const getSitters = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/sitters${query}`, {
            headers: {
                ...generateAuthHeader()
            }
        })
            .then((response) => response.json())
            .then((sitterData) => {
                setSitters(sitterData)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    useEffect(() => {
        getSitters()
    }, [query])

    return (
        <div className="GridCardsSitters container mb-3">
            <div className="App-page-title">Your Sitter Search Results</div>
            <Filters filters={handleCallback} />
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
