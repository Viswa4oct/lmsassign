import React from "react";
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';


function Home() {
  const currentState = useHistory();
  const goTo = (url) => {
    currentState.push(url);
  };

  return (
    <div>
      <Row justify={'center'}>
        <Col>
          <div>
            <h1>C2 - Assignment 2 - Web Development</h1>
          </div>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col>
          <div>
            <Button type={'primary'} onClick={() => goTo('/login')}> Login</Button>
            <Button type={'default'} onClick={() => goTo('/signup')}> Sign Up</Button>
          </div> 
        </Col>
      </Row>
    </div>
  );
}

export default Home;