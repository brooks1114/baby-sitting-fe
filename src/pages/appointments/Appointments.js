import { useEffect, useState } from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import "../../App.css";
import AppointmentCard from "../../components/gridcards/AppointmentCard";
import Header from "../../components/header/Header";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import { generateAuthHeader, getUserEmail, isAuthenticated } from "../../utils/authHelper";

function Appointments(props) {
  const [appointments, setAppointments] = useState([])

  const getAppointments = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/appointments/${getUserEmail()}`, {
      headers: {
        ...generateAuthHeader()
      },
    })
      .then((response) => response.json())

      .then((appointmentData) => {
        setAppointments(appointmentData)
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <div className="Appointments container mb-3">
      <Header isAuthenticated={isAuthenticated()} />
      <div className="App-page-title">Your Family's Appointments</div>
      {appointments.length === 0 ?
        <div>
          <h3>No appointments</h3>
          <h5>Want to find a sitter and create one?</h5>
          <Button onClick={() => { props.history.push(`/sitters`) }}>Take me there!</Button>
        </div>
        :
        <Row xs={1} lg={3} className="g-4">
          {appointments.map((appointment, idx) => (
            <Col key={idx}>
              <AppointmentCard appointment={appointment} getAppointments={getAppointments} />
            </Col>
          ))}
        </Row>}
    </div>
  );
}

export default mustBeAuthenticated(Appointments);
