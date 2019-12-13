import React, {useState} from "react";
import { Card, CardBody, CardTitle, CardText, Button, Collapse } from "reactstrap";

const PeopleCard = props => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card style={{width: '25%', margin: "0 auto", backgroundColor: 'lightblue'}}>
        <CardBody>
          <CardTitle style={{fontWeight: "bold"}}>{props.name}</CardTitle>
          <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Details</Button>
          <Collapse isOpen={isOpen}>
          <CardText>Mass: {props.mass} kg</CardText>
          <CardText>Height: {props.height} cm</CardText>
          <CardText>Hair Color: {props.haircolor}</CardText>
          <CardText>Skin Color: {props.skincolor}</CardText>
          <CardText>Eye Color: {props.eyecolor}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Birthday: {props.birth}</CardText>          
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
};

export default PeopleCard;