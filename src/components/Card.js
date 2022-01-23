import React from "react";
import cardImage from "../assets/images/card.jpg"
import { StyledCard } from "./styles/card-styles/StyledCard";
import { CardContainer } from "./styles/card-styles/CardContainer";
import githubIcon from '../assets/images/project-icons/github_icon_2.svg'
import linkIcon from '../assets/images/project-icons/link_icon.svg'
import { IconContainer } from "./styles/card-styles/IconContainer";

export default function Card({tags, description, project_title, github_url, live_link}) {


  return (
    <StyledCard>
      <img src={cardImage}/>
      <h3>{project_title}</h3>
      <p>{description}</p>
      <p className="tags">{tags}</p>
      <IconContainer>
        <a href={github_url}>
          <img src={githubIcon} className="icon"/>
        </a>
        <a href={live_link}>
          <img src={linkIcon}  className="icon"/>
        </a>
      </IconContainer>
    </StyledCard>
  )
}