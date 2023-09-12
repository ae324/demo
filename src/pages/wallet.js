import React from "react";
import card1 from "../images/icons/deposit.png";
import card2 from "../images/icons/findatm.png";
import card3 from "../images/icons/sendZelle.png";
import rewardsCard from "../images/icons/rewardsCard.png";
import { Image, Row, Col, Button, Container, Nav } from "react-bootstrap";
import "../wallet.css";
import "../App.css";
import NavbarBottom from "../components/navbarBottom";
import NavbarTop from "../components/navbarTop";

const Wallet = () => {
  return (
    <>
      {/* <!--------------------- Top Nav ---------------------!> */}
      <NavbarTop></NavbarTop>
      {/* <!--------------------- Header Title ---------------------!> */}
      <Container fluid id="welcomeTitle">

        <h1>Welcome back, Mike</h1>
      </Container >
      {/* <!--------------------- Three Card Row ---------------------!> */}
      <Container fluid className="row justify-content-around" r>
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
      <Container id="rewardCard">
        <Image fluid src={rewardsCard}></Image>
      </Container>
      {/* <!--------------------- Stack of Credit Cards ---------------------!> */}
      <Container>
        <div id="walletStack">
        </div>
      </Container>
      {/* <!--------------------- Bottom Button ---------------------!> */}
      <Container>
        <Button   id="addExAccountButton" size="lg" href="/main"> Add External Account</Button>
      </Container>
      {/* <!--------------------- Bottom Nav ---------------------!> */}

      <NavbarBottom></NavbarBottom>

    </>
  )
}
export default Wallet;