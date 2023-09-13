import React from "react";
import "../rewardsCard.css";
import rewardsIcon from "../images/icons/rewardIcon.png";
import { Card,Row,Col} from "react-bootstrap";

const styles = {
    cardImage: {
        width: '50px',
      },
    Card:{
        width:'327px',
        height: "80px",
        border: "1px #6633dd solid",
      },
      CardText:{
        fontSize: '10px'
      }
}
const RewardsCard = () => {
    return (
        <>
     <Card style={styles.Card}>

        <Row>
            <Col xs={9}>
      <Card.Body>
        <Card.Title>Get <span style={{color: "#6633dd"}}> $1000</span></Card.Title>
        <Card.Text style={styles.CardText}>
        $560k in processing until next $1,000 cash reward
        </Card.Text>
      </Card.Body>
    
            </Col>
            <Col xs={3} className="object-fit-cover d-flex align-items-center" >
            <Card.Img  src={rewardsIcon} style={styles.cardImage}  />
            </Col>
        </Row>
        </Card>
        </>
    )
}
export default RewardsCard;