import React from "react";
import '../login.css';
import { Button, Form, Col, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
    <div id="body">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmailAddress">
            <Col sm="10">
            <Form.Control type="password" placeholder="Email Address" />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
            </Col>
        </Form.Group>
      </Form>
      <div className="d-grid gap-2">
        <Button size="lg">Login</Button>
        <Button  size="lg">Sign Up</Button>
    </div>
    </div>
             </>
    )
}

export default Login;