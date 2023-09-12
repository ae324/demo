import React from "react";
import '../login.css';
import { Button, Form, Col, Row } from "react-bootstrap";
import logo from '../images/logos/logo.png';


const Login = () => {
  return (
    <>
    <div id="body">
      <center    style={{padding:"50px"}}> 
    <img
                        src={logo}
                        width="130"
                
                        
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    ></img>
</center>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmailAddress">
            <Col sm="10">
            <Form.Control type="password" placeholder="Email Address" />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
            <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
            </Col>
        </Form.Group>
      </Form>
      <div className="d-grid gap-2">
        <Button size="lg" style={{backgroundColor: "#048c04", border:"none",}}>Login</Button>
        <Button  size="lg"style={{backgroundColor: "white", border:"1px #048c04 solid",color:"#048c04"}}>Sign Up</Button>
    </div>
    </div>
             </>
    )
}

export default Login;