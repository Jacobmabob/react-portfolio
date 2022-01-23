import React from "react";
import cardImage from "../assets/images/card.jpg"
import { StyledCard } from "./styles/card-styles/StyledCard";
import { CardContainer } from "./styles/card-styles/CardContainer";
import githubIcon from '../assets/images/project-icons/github_icon_2.svg'
import linkIcon from '../assets/images/project-icons/link_icon.svg'
import { IconContainer } from "./styles/card-styles/IconContainer";

export default function Card({tags, description}) {


  return (
    <StyledCard>
      <img src={cardImage}/>
      <p>{tags}</p>
      <p>{description}</p>
      <IconContainer>
        <a>
          <img src={githubIcon} className="icon"/>
        </a>
        <a>
          <img src={linkIcon}  className="icon"/>
        </a>
      </IconContainer>
    </StyledCard>
  )
}