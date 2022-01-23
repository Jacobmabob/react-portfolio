import React from "react";
import cardImage from "../assets/images/card.jpg"
import { StyledCard } from "./styles/card-styles/StyledCard";
import { CardContainer } from "./styles/card-styles/CardContainer";
import githubIcon from '../assets/images/project-icons/github_icon.svg'
import linkIcon from '../assets/images/project-icons/link_icon.svg'


export default function Card({tags, description}) {


  return (
    <StyledCard>
      <img src={cardImage}/>
      <p>{tags}</p>
      <p>{description}</p>
      <CardContainer>
        <a>
          <img src={githubIcon} />
        </a>
        <a>
          <img src={linkIcon} />
        </a>
      </CardContainer>
    </StyledCard>
  )
}