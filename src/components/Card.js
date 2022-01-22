import React from "react";
import cardImage from "../assets/images/card.jpg"
import { StyledCard } from "./styles/card-styles/StyledCard";

export default function Card({tags, description}) {


  return (
    <StyledCard>
      <img src={cardImage}/>
      <p>{tags}</p>
      <p>{description}</p>
    </StyledCard>
  )
}