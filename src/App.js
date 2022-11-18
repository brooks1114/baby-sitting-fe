import { Route, Switch } from "react-router-dom";
import Appointments from "./pages/appointments/Appointments";
import CreateAppointment from "./pages/createAppointment/CreateAppointment";
import DeleteAccount from "./pages/deleteAccount/DeleteAccount";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import Sitters from "./pages/sitters/Sitters";
import UpdateUser from "./pages/updateUser/UpdateUser";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={Appointments}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/register"
          component={Register}
        />
        <Route
          exact
          path="/updateuser/:email"
          component={UpdateUser}
        />
        <Route
          exact
          path="/sitters"
          component={Sitters}
        />
        <Route
          exact
          path="/appointments"
          component={Appointments}
        />
        <Route
          exact
          path="/createappointment/:sitteremail"
          component={CreateAppointment}
        />
        <Route
          exact
          path="/deleteaccount"
          component={DeleteAccount}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;
