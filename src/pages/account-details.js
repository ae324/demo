import React from "react";
import NavbarTop from "../components/navbarTop";
import NavbarBottom from "../components/navbarBottom";
import { Container, Image} from "react-bootstrap";
import "../account-details.css"
import CreditCard from "../images/credit-card.png";
const AccountDetails = () => {
    return (
        <>
        <NavbarTop></NavbarTop>
        <div className="frame">

      <div className="group">
      <img className="vector" alt="Vector" src="https://c.animaapp.com/FZedNJzB/img/vector-1.svg" />
      </div>
      <div className="text-wrapper">Debit Card Account</div>
      </div>

        <NavbarBottom></NavbarBottom>
        <Container>
            <Image src={CreditCard} fluid></Image>
        </Container>
        </>
    )
}
export default AccountDetails;