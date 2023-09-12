import React from "react";
import logo from '../images/logos/logo.png';
import '../App.css';
import { Navbar, Container } from "react-bootstrap";

const Wallet = () => {

  return (
    <>
      <Navbar>
        <Container>
            <img
              src={logo}
              width="100"
              height="38"
            />
        </Container>
      </Navbar>
      

    </>
  )
}

export default Wallet;