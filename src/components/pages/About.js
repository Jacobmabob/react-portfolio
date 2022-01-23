import React from 'react';
import Button from '../Button';
import { StyledContainer } from '../styles/about-styles/StyledContainer';
import { FlexItem } from '../styles/about-styles/FlexItem';


export default function About() {
  return (
    <StyledContainer>
      <FlexItem/>
      <h1>Welcome.</h1>
      <h3>My name is Jacob.</h3>
      <p>I am a <span>Front-end Developer </span><br></br>
        based in Atlanta, GA.<br></br>
        I am a UX/UI enthusiast<br></br>
        with a focus in Mobile First Design.</p>
      <div>
        <Button text={'Contact'} />
        <Button text={'Resume'} />
      </div>
      <FlexItem/>
      <FlexItem>
        
      </FlexItem>
    </StyledContainer>
  );
}
