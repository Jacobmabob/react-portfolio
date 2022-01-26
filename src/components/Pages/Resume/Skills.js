import React from 'react';
import { StyledList } from '../../styles/skills_styles/StyledList';
import { StyledListFlexItem } from '../../styles/skills_styles/StyledListFlexItem';
import Button from '../../Button';
import { StyledButtonContainer } from '../../styles/skills_styles/StyledButtonGroup';

export default function Skills() {
  return (
    <div>
      <h1>Skills.</h1>
      <StyledList>
        <StyledListFlexItem>
          <h2>Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
        </StyledListFlexItem>
        <StyledListFlexItem>
          <h2>Backend</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </StyledListFlexItem>
      </StyledList>
      <StyledButtonContainer>
        <Button text="Resume" />
      </StyledButtonContainer>
    </div>
  );
}
