import React from "react";
import card1 from "../images/icons/deposit.png";
import card2 from "../images/icons/findatm.png";
import card3 from "../images/icons/sendZelle.png";
import tempStackImg from "../images/image009.png";
import rewardsCard from "../images/icons/rewardsCard.png";
import { Image, Row, Col, Button, Container, Nav } from "react-bootstrap";
import "../wallet.css";
import "../App.css";
import "../walletstack.css";
import NavbarBottom from "../components/navbarBottom";
import NavbarTop from "../components/navbarTop";
import WalletStack from "../components/walletstack";

const Wallet = () => {
  return (
    <>
    <Container style={{backgroundColor:"#F9F9F9"}}>
      {/* <!--------------------- Top Nav ---------------------!> */}
      <NavbarTop></NavbarTop>
      {/* <!--------------------- Header Title ---------------------!> */}
      <Container fluid id="welcomeTitle">
        <h1>Welcome back, Mike</h1>
      </Container >
      {/* <!--------------------- Three Card Row ---------------------!> */}
      <Container fluid className="row justify-content-around">
        <div class="col-4">
          <img src={card1} width={100}></img>
        </div>
        <div class="col-4">
          <img src={card2} width={100}></img>
        </div>
        <div class="col-4">
          <img src={card3} width={100}></img>
        </div>
        <div class="col-4">
          <img width={100}></img>
        </div>
      </Container>
      {/* <!--------------------- Rewards Card ---------------------!> */}
      <Container id="rewardCard" className="position-relative" style={{paddingBottom:"30px"}}>
        <Image fluid src={rewardsCard}></Image>
      </Container>
      {/* <!--------------------- Stack of Credit Cards ---------------------!> */}
      <Container fluid className="row justify-content-around">
    <WalletStack></WalletStack>
      </Container>
      {/* <!--------------------- Bottom Button ---------------------!> */}
      <Container style={{paddingTop:"30px",paddingBottom:"30px"}}>
        <center>
        <Button  id="addExAccountButton" size="lg" href="/addExternalAccount" style={{backgroundColor:"white", borderColor:"#228800", color:"#228800"}}> Add External Account</Button>
        </center>
      </Container>
      </Container>
      
      {/* <!--------------------- Bottom Nav ---------------------!> */}

      <NavbarBottom></NavbarBottom>
      
    </>
  )
}
export default Wallet;