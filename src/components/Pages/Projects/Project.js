import React from "react";
// import cardImage from "../../../assets/images/card.jpg"
import { StyledCard } from "../../styles/card_styles/StyledCard";
import { CardContainer } from "../../styles/card_styles/CardContainer";
import githubIcon from '../../../assets/images/project-icons/github_icon_2.svg'
import linkIcon from '../../../assets/images/project-icons/link_icon.svg'
import { LinkContainer } from "../../styles/card_styles/LinkContainer";
import Button from "../../Button";

export default function Card({
  id,
  tags, 
  description, 
  project_title, 
  github_url, 
  live_link,
  cardImage
}) {


  return (
    <StyledCard key={id}>
      <img src={cardImage}/>
      <h3>{project_title}</h3>
      <p>{description}</p>
      <p className="tags">{tags}</p>
      <LinkContainer>
        <a href={github_url} target="_blank"><Button text="Codebase" /></a>

        {live_link ? (
          <a href={live_link} target="_blank"><Button text="Deployed"/></a>
        ) : (null)}
        
        
      </LinkContainer>
    </StyledCard>
  )
}