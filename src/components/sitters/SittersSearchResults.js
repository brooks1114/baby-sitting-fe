// import Card from 'react-bootstrap/Card';
import { useCallback, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SingleSitterCard from "../gridcards/SingleSitterCard";
import Filters from "../filter/Filters";

function GridCardsSittersHook(props) {

    const [sitters, setSitters] = useState([])
    const [query, setQuery] = useState("")
    const handleCallback = useCallback((filters) => {
        console.log("Calling callback")
        let queryBuilder = "?"
        Object.keys(filters).map((key) => {
            if (filters[key]) {
                queryBuilder += `${key}=${filters[key]}&`
            }
        })
        setQuery(queryBuilder)
    }, []);

    // const handleCallback = (filters) => {
    //     // this.setState({data: childData})
    //     console.log("filters", filters)
    //     console.log("MEGAN IN CALLBACK")
    //     setQuery("")
    //     console.log(query)
    //     return filters;
    // };

    const getSitters = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/sitters${query}`)
            .then((response) => response.json())

            .then((sitterData) => {
                console.log("getsitters successful")
                setSitters(sitterData)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    useEffect(() => {
        console.log("useEffect")
        getSitters()
    }, [query])

    return (
        <div className="GridCardsSitters container mb-3">
            <Filters filters={handleCallback} />
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
