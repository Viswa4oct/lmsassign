import React from "react";
import { useHistory } from 'react-router-dom';

function DashboardL() {

  const currentState = useHistory();
    const goTo = (url) => {
      currentState.push(url);
    };

  return (
    <div className="container">
        <h1> Lecturer Dashboard</h1>
        <h2> Please check Student Dashboard</h2>
        <h4><a  onClick={() => goTo('/login')}>Go to Login?</a></h4>
    </div>
  );
}

export default DashboardL;