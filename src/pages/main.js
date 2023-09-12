import React from "react";
import card1 from "../images/icons/deposit.png";
import card2 from "../images/icons/findatm.png";
import card3 from "../images/icons/sendZelle.png";
import rewardsCard from "../images/icons/rewardsCard.png";
import { Row, Col, Button } from "react-bootstrap";

import '../App.css';
import '../wallet.css';

const Main = () => {

    return (
        <>
            {/* <!--------------------- Header Title ---------------------!> */}

            <div id="welcomeTitle">
                <h1>Welcome back, Mike</h1>
            </div>
            {/* <!--------------------- Three Card Row ---------------------!> */}
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
            {/* <!--------------------- Rewards Card ---------------------!> */}
            <div id="rewardCard">
                <img src={rewardsCard} width={300}></img>
            </div>
            {/* <!--------------------- Stack of Credit Cards ---------------------!> */}

            <div id="walletStack">
            </div>
            {/* <!--------------------- Bottom Button ---------------------!> */}
            <div id="addExAccountButton">
                <a href="/main">
                    <button type="button" class="btn btn-success">Add External Account</button>
                </a>
            </div>


        </>
    )
}

export default Main;