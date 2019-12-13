import React from "react";
import { Card } from "reactstrap";

const PeopleCard = props => {
  return (
  <div>
    <h2>{props.name}</h2>
    <p>Height: {props.height} cm</p>
    <p>Mass: {props.mass} kg</p>
    <p>Hair Color: {props.haircolor}</p>
    <p>Skin Color: {props.skincolor}</p>
    <p>Gender: {props.gender}</p>
  </div>
  );
};

export default PeopleCard;