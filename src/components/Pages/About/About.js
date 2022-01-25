import React from 'react';
import Button from '../../Button';
import { StyledContainer } from '../../styles/about_styles/StyledContainer';
import { FlexItem } from '../../styles/about_styles/FlexItem';
import avatar from '../../../assets/images/Avatar-Maker.svg'

export default function About() {
  return (
    <StyledContainer>
      <FlexItem>
        <div>
          <h1>Hello,</h1>
          <h3>My name is Jacob.</h3>
          <p>I am a <span>Front-end Developer </span><br></br>
            based in Atlanta, GA.<br></br>
            I am a UX/UI enthusiast<br></br>
            with a focus in Mobile First Design.</p>
          <Button text={'Contact'} />
          <Button text={'Resume'} />
        </div>
      </FlexItem>
      <FlexItem className="avatar">
        <img src={avatar} />
      </FlexItem>
    </StyledContainer>
  );
}
