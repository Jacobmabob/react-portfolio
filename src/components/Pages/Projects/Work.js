import React from 'react';
import Card from './Project';
import { CardContainer } from '../../styles/card_styles/CardContainer';
import projectData from './projectData';

export default function Work() {
  return (
    <>
    <h1>Projects.</h1>
    <CardContainer>
      {projectData.map( item => (
         <Card 
         project_title={item.project_title}
         tags={item.tags} 
         description={item.description}
         github_url={item.github_url}
         live_link={item.live_link}  
       />
      ))}
    </CardContainer>
    </>
  );
}
