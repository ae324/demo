import React from "react";
import card1 from "../images/icons/deposit.png";
import card2 from "../images/icons/findatm.png";
import card3 from "../images/icons/sendZelle.png";
import rewardsCard from "../images/icons/rewardsCard.png";
import { Image, Row, Col, Card, Button, Container, Nav } from "react-bootstrap";
import "../wallet.css";
import "../App.css";
import "../walletstack.css";
import NavbarBottom from "../components/navbarBottom";
import NavbarTop from "../components/navbarTop";
import WalletStack from "../components/walletstack";
import WalletIconRow from "../components/walletIconRow";

const Wallet = () => {
  return (
    <>
      <Container style={{ paddingTop: "70px", overflow: "scroll", paddingBottom: "100px" }}>
        {/* <!--------------------- Top Nav ---------------------!> */}
        <NavbarTop></NavbarTop>
        {/* <!--------------------- Header Title ---------------------!> */}
        <Container fluid id="welcomeTitle">
          <h1>Welcome back, Mike</h1>
        </Container >
        {/* <!--------------------- Three Icon Row ---------------------!> */}
      <WalletIconRow></WalletIconRow>

        {/* <!--------------------- Rewards Card ---------------------!> */}
        <Container id="rewardCard" className="position-relative" style={{ paddingBottom: "30px" }}>
          <Image fluid src={rewardsCard}></Image>
        </Container>
        {/* <!--------------------- Stack of Credit Cards ---------------------!> */}
        <Container fluid className=" justify-content-around">
          <WalletStack></WalletStack>
        </Container>
        {/* <!--------------------- Bottom Button ---------------------!> */}
        <Container fluid style={{ paddingTop: "30px", height: "100%" }}>
          <center>
            <Button id="addExAccountButton" size="lg" href="/addExternalAccount" style={{ backgroundColor: "white", borderColor: "#228800", color: "#228800" }}> Add External Account</Button>
          </center>
        </Container>

        {/* <!--------------------- Bottom Nav ---------------------!> */}
        <NavbarBottom></NavbarBottom>
    </Container>
    </>
  )
}
export default Wallet;