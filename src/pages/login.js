import React from "react";
import "../App.css";
import "../login.css";
import { Button, Form, Col, Row, Container,Image } from "react-bootstrap";
import logo from '../images/logos/logo.png';

const Login = () => {
  return (
    <>
      <Container className="container">
        <div style={{ paddingTop: "30px", paddingRight: "30px", paddingBottom: "30px" }}>
          <img
            src={logo}
            width="130"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          ></img>
        </div>
        <h1>Welcome to<br></br>Clover Finance</h1>
        <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>Where small business meets big finance.</h6>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmailAddress">
            <Col sm="10">
              <Form.Control style={{ paddingTop: "10px", paddingBottom: "10px" }} type="emailAddress" placeholder="Email Address" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
            <Col sm="10">
              <Form.Control style={{ paddingTop: "10px", paddingBottom: "10px" }} type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <div className="d-grid">
          <Button size="lg" style={{ backgroundColor: "#048c04", border: "none", }}><a href="/wallet" id="RemoveLinkStyling">Login </a></Button>
          <p style={{ paddingTop: '20px' }}>< a href="/">Forgot password</a></p>
          <Button size="lg" style={{ backgroundColor: "white", border: "1px #048c04 solid", color: "#048c04" }}>Sign Up</Button>
        </div>
      </Container>
      <Image className="align-bottom image" alt="Vector" src="https://c.animaapp.com/rSnSUiym/img/vector.svg"></Image>

    </>
  )
}

export default Login;