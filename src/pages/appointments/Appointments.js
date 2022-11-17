import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AppointmentCard from "../../components/gridcards/AppointmentCard";
import Header from "../../components/header/Header";
import { isAuthenticated } from "../../utils/authHelper";
import { generateAuthHeader, getUserEmail } from '../../utils/authHelper'
import "../../App.css"
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";

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
      <Row xs={1} lg={3} className="g-4">
        {appointments.map((appointment, idx) => (
          <Col key={idx}>
            <AppointmentCard appointment={appointment} getAppointments={getAppointments} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default mustBeAuthenticated(Appointments);
