import React from "react";
import card1 from "../images/icons/deposit.png";
import card2 from "../images/icons/findatm.png";
import card3 from "../images/icons/sendZelle.png";
import rewardsCard from "../images/icons/rewardsCard.png";
import { Row, Col, Button, Container } from "react-bootstrap";
import './App.css';
import '../wallet.css';

const Main = () => {

    return (
        <>
            {/* <!--------------------- Header Title ---------------------!> */}
        <Container fluid>
            <div id="welcomeTitle">
                <h1>Welcome back, Mike</h1>
            </div>
            </Container >
            {/* <!--------------------- Three Card Row ---------------------!> */}
            <Container>
            <div class="row justify-content-around">
                <div class="col-4">
                    <img src={card1} width={100}></img>
                </div>
                <div class="col-4">
                    <img src={card2} width={100}></img>
                </div>
                <div class="col-4">
                    <img src={card3} width={100}></img>
                </div>
            </div>
            </Container>
            {/* <!--------------------- Rewards Card ---------------------!> */}
            <Container>
            <div id="rewardCard">
                <img src={rewardsCard} width={300}></img>
            </div>
            </Container>
            {/* <!--------------------- Stack of Credit Cards ---------------------!> */}
            <Container>
            <div id="walletStack">
            </div>
            </Container>
            {/* <!--------------------- Bottom Button ---------------------!> */}
            <Container>
            <div id="addExAccountButton">
                <a href="/main">
                    <button type="button" class="btn btn-success">Add External Account</button>
                </a>
            </div>
            </Container>


        </>
    )
}

export default Main;