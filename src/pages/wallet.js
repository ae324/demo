import React from "react";
import { Button, Container} from "react-bootstrap";
import "../wallet.css";
import "../App.css";
import "../walletstack.css";
import NavbarBottom from "../components/navbarBottom";
import NavbarTop from "../components/navbarTop";
import WalletStack from "../components/walletstack";
import WalletIconRow from "../components/walletIconRow";
import RewardsCard from "../components/rewardsCard";

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
        <center>
        <Container >
        {/* <!--------------------- Three Icon Row START ---------------------!> */}
       <WalletIconRow></WalletIconRow>
       </Container >
       </center>
        {/* <!--------------------- Three Icon Row END---------------------!> */}
       
    
        {/* <!--------------------- Rewards Card START---------------------!> */}
        <Container style={{ paddingTop: "30px", paddingBottom: "30px" }}>
       <RewardsCard></RewardsCard>
       </Container >
        {/* <!--------------------- Rewards Card END---------------------!> */}

        {/* <!--------------------- Wallet Stack START---------------------!> */}
        <Container fluid className=" justify-content-around">
          <WalletStack></WalletStack>
        </Container>
        {/* <!---------------------  Wallet Stack END---------------------!> */}

        {/* <!--------------------- Button START ---------------------!> */}
        <Container fluid style={{ paddingTop: "30px", height: "100%" }}>
          <center>
            <Button id="addExAccountButton" size="lg" href="/addExternalAccount" style={{ backgroundColor: "white", borderColor: "#228800", color: "#228800" }}> Add External Account</Button>
          </center>
        </Container>
     {/* <!--------------------- Button END ---------------------!> */}

     {/* <!--------------------- Bottom Nav START ---------------------!> */}
        <NavbarBottom></NavbarBottom>
     {/* <!--------------------- Bottom Nav END ---------------------!> */}
       
    </Container>
    
    </>
  )
}
export default Wallet;