// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import { Component } from 'react'


class GridCardsSitters extends Component {

    state = {
        sitters: []
    }

    //perfect opportunity to reachout to an api and get data because
    //this runs when the component shows
    componentDidMount() {
        console.log("this just ran")
        this.getSitters()
    }

    // Request endpoint to get the list of Sitters

    getSitters = () => {
        fetch("http://localhost:5000/api/sitters")
            .then((response) => response.json())

            .then((sitterData) => {
                console.log(sitterData)
                this.setState(
                    {
                        sitters: sitterData
                    }
                )
            })

            .catch((error) => {
                console.log(error.message)
            });
    }

    render() {
        return (
            <div className="GridCardsSitters container mb-3">
                <button onClick={() => console.log(this.state.sitters)} />
            </div>
        );
    }
}

export default GridCardsSitters;
