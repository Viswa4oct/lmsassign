import React, { useState } from "react";
import { Input, Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import {Users} from '../../constants';
import _ from 'lodash';

function Login() {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const currentState = useHistory();
    const goTo = (url) => {
        currentState.push(url);
    };

    const LoginFunc = () =>{
        if(!_.isEmpty(username)&& !_.isEmpty(password)){
            let userAuthenticated = false;
            Users.map((user)=>{
                if((user.email == username)&&(user.password == password) ){
                    userAuthenticated = true;
                    if(user.role == 'lecturer'){
                        goTo('/dashboardL');
                    }
                    else if(user.role == 'student'){
                        goTo('/dashboardS');  
                    } 
                }
            });
            if(!userAuthenticated){
                setError('Username or Password credentials don’t match. '); 
            }
        }
        else{
            setError('Please enter valid Username and Password credentials to proceed. ');
        }
    }

  return (
    <div className="App">
        <Row justify={'center'}>
            <Col>
                    <div>
                        <h1>Login</h1> 
                            <Input size="large" placeholder="Username"
                            value={username} onChange={(e)=>{setError('');setUsername(e.target.value)}} /> 
                            <Input.Password
                            size="large"
                            placeholder="Password"
                            value={password} onChange={(e)=>{setError('');setPassword(e.target.value)}}
                            />
                            {error && <h6>{error}</h6>}
                            <Button size="large"
                            type="primary"
                            onClick={()=>LoginFunc()}>Login</Button> 
                            <h5>New User? <a onClick={() => goTo('/signup')}> Sign Up</a></h5>
                    </div>
            </Col>
        </Row>
    </div>
  );
}

export default Login;