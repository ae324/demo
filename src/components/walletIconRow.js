import React from "react";
import card1 from "../images/icons/deposit.png";
import card2 from "../images/icons/findatm.png";
import card3 from "../images/icons/sendZelle.png";
import rewardsCard from "../images/icons/rewardsCard.png";
import { Image, Row, Col, Card, Button, Container, Nav } from "react-bootstrap";
import "../wallet.css";
import "../App.css";

const WalletIconRow = () => {
  return (
    <>
    <Container>

          <Row >
            <Col>
              <Card class="col-4" >
                <Card.Img src={card1} />
              </Card>
            </Col>
            <Col>
              <Card class="col-4">
                <Card.Img src={card2} />
              </Card>
            </Col>
            <Col>
              <Card class="col-4">
                <Card.Img src={card3} />
              </Card>
            </Col>
          </Row>
        </Container>

    </>
  )
}
export default WalletIconRow;