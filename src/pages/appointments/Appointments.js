import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AppointmentCard from "../../components/gridcards/AppointmentCard";
import Header from "../../components/header/Header";
import { isAuthenticated } from "../../utils/authHelper"; 

function Appointments(props) {
  const [appointments, setAppointments] = useState([])

  const getAppointments = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/appointments}`)
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
    <div className="Appointments">
      <Header isAuthenticated={isAuthenticated()} />
      <h4>HELLO!</h4>
      <Row xs={1} lg={3} className="g-4">
        {appointments.map((appointment, idx) => (
          <Col key={idx}>
            <AppointmentCard appointment={appointment} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Appointments;
