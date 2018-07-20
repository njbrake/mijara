import React from 'react';
import { Container, Card, Button, CardImg, CardText, CardDeck,
 CardSubtitle, CardBody, Row } from 'reactstrap';
import CardPic1 from '../assets/software1.jpg';
import CardPic2 from '../assets/software2.jpg';

const Cards = (props) => {
  const descriptionText = "We’re a talented group of entrepreneurs and engineers delivering solutions designed to contribute towards a better tomorrow. We provide smart answers for companies of all sizes and pride ourselves on our unparalleled, dedicated service. At MIJARA Corporation, we believe that the right understanding and technological edge can lead companies towards a successful future. Contact us today to set up a meeting with one of our representatives.";
  const heading= "Our Business";
  const subheading = "How We Got Here";
  const contactInfo = "Call Today: (888) 224-3598 ";
  const businessInfoHeading = "Advanced Solutions";
  const buttonTitles = ["Contact Us","Explore Computing Services","Explore Data Connection"];
  const skills = ["Infrastructure", "Software Development","Technology Consultation","Realtime Data Collection","Offline Data Collection"];
  let skillsList = skills.map(function(skill){return <li>{skill}</li>;});

  return (
    <Container fluid className="cards">
      <CardDeck style={{paddingTop: '40px', paddingBottom: '40px'}}>
        <Card body color="light">
          <CardImg top width="100%" src={CardPic1} alt="Card image cap" />
          <CardBody>
            <h2 className="text-center">{heading}</h2>
            <br/>
            <CardSubtitle>{subheading}</CardSubtitle>
            <br/>
            <CardText>
              {descriptionText}
            </CardText>
            <br/>
            <CardSubtitle> {contactInfo}</CardSubtitle>
            <br/>
            <Button color="primary" className="mx-auto">{buttonTitles[0]}</Button>
          </CardBody>
        </Card>
        <Card body  color="light">
          <CardImg top width="100%" src={CardPic2} alt="Card image cap" />
          <CardBody>
            <h2 className="text-center">{businessInfoHeading}</h2>
            <br/>
            <CardSubtitle>Innovative Technology</CardSubtitle>
            <p style={{marginBottom: '0px', marginTop: '8px'}}> Our areas of expertise include: </p>
            <Row>
              <ul> {skillsList} </ul>
            </Row>
            <Row style={{paddingTop:"15px"}}>
              <Button color="primary" className="mx-3">{buttonTitles[1]}</Button>
            </Row>
            <Row style={{paddingTop:"15px"}}>
              <Button color="primary" className="mx-3">{buttonTitles[2]}</Button>
            </Row>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Cards;
