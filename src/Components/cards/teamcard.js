import React from 'react';
import { Card, CardImg, CardHeader, Col } from 'reactstrap';


const TeamCard = (props) => {
  return (
    <Col sm={props.colsize || 2} id='myCard'>
      <Card >
      <a href={props.link} id="cardlinkStyle">
        <CardHeader>{props.title}</CardHeader>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        </a>
      </Card>
    </Col>
  );
};

export default TeamCard;