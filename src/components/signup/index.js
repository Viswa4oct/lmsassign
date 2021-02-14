import React, { useState } from "react";
import { Input, Row, Col, Button, DatePicker, Select, Tag, message } from 'antd';
import { useHistory } from 'react-router-dom';
const { Option } = Select;

function Signup() {

const [error, setError] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordHint, setPasswordHint] = useState(false);
const [dob, setDob] = useState('');
const [role, setRole] = useState('');
const [loading, setLoading] = useState(false);

    const currentState = useHistory();
    const goTo = (url) => {
      currentState.push(url);
    };

    const validateEmail = (email) => {
      const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEx.test(String(email).toLowerCase());
  }
    const validatePassword = (password) => {
      const regEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      return regEx.test(String(password));
  }

     const onEmailChange = (email) => {
      setError('');
      setEmail(email) 
    }

     const onPasswordChange = (password) => {
      setError(''); 
      setPassword(password) 
    }

    const onDateChange = (date, dateString) => {
      setDob(dateString);
      console.log(date, dateString);
    }

    const onRoleChange = (value) => { 
      setRole(value) 
    }

    const RegisterFunc = () =>{
      console.log(name, email, password, dob,role);
      setError('');  
      if(name && email && password && dob && role){
        let validData = true;
       
        if(!validatePassword(password)){
          validData = false;
          setError('Please check password entered, it doesn`t meet requirements.'); 
        } 
        if(!validateEmail(email)){
          validData = false;
          setError('Please enter valid email-id'); 
        } 
        if(validData){
          setLoading(true);
          setTimeout(() => {
            message.success('User signed up. Login user to proceed!');
          }, 2000); 
          setTimeout(() => {
            setLoading(false); 
            goTo('/login'); 
          }, 2000); 
        }
      }
      else{
        setError('Missing mandatory fields. Please enter all details to sign up user.');  
      } 
  }

  return (
    <div className="App">
        <Row justify={'center'}>
            <Col>
                    <div>
                        <h1>Sign Up</h1> 
                            <div>
                              <Input size="large" placeholder="Name"
                              value={name}
                              onChange={(e)=>setName(e.target.value)}
                              /> 
                            </div>
                            <div>
                              <Input size="large" placeholder="Email" 
                              value={email}
                              onChange={(e) => onEmailChange(e.target.value)}
                                />  
                            </div>
                            <Input.Password
                            size="large"
                            placeholder="Password"
                            value={password} 
                            onFocus={()=>setPasswordHint(true)}
                            onChange={(e)=>onPasswordChange(e.target.value)}
                            />
                            {passwordHint &&   <div>
                              <Tag color="red" style={{ whiteSpace: 'pre-wrap'}}>Password to contain minimum 8 characters with atleast 1 number and having minimum of 1 lower case letter, 1 upper case letter and 1 special character.</Tag>
                              </div>}
                            <div><DatePicker format={'DD/MM/YYYY'} onChange={onDateChange} size="large" placeholder="D.O.B" /></div>
                            <div>
                            <Select placeholder={'Role'} size="large"  onChange={onRoleChange}>
                              <Option value="student">Student</Option>
                              <Option value="lecturer">Lecturer</Option> 
                            </Select> 
                            </div>
                            {error && <h5>{error}</h5>}
                            <Button size="large"
                            type="primary"
                            onClick={RegisterFunc}
                            loading={loading}
                            >Sign Up</Button>  
                            <h4>Account already exists? <a  onClick={() => goTo('/login')}>Login</a></h4>
                    </div>

            </Col>
        </Row>
    </div>
  );
}

export default Signup;