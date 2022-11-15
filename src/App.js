import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Protected from "./pages/protected/Protected";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Sitters from "./pages/sitters/Sitters";
import CreateAppointment from "./pages/createAppointment/CreateAppointment";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
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
          path="/protected"
          component={Protected}
        />
        <Route
          exact
          path="/createappointment/:sitteremail"
          component={CreateAppointment}
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
