import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css'; 
import SignUp from './components/signup';
import Login from './components/login';
import DashboardS from './components/dashboardS';
import DashboardL from './components/dashboardL';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" exact name="Home" component={Home} />
            <Route exact path="/signup" name="Signup" component={SignUp} />
            <Route exact path="/login" name="Login" component={Login} />
            <Route exact path="/dashboardS" name="Student" component={DashboardS} />
            <Route exact path="/dashboardL" name="Lecturer" component={DashboardL} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
