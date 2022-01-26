import React from 'react';
import Button from '../../Button';
import { StyledContainer } from '../../styles/about_styles/StyledContainer';
import { FlexItem } from '../../styles/about_styles/FlexItem';
import avatar from '../../../assets/images/Avatar-Maker.svg'
import Contact from '../Contact/Contact';



export default function About({ currentPage, handlePageChange }) {





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
          <Button onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            text={'Contact'} />
          <a href="https://docs.google.com/document/d/1e_JoknirR5EA08O8Mn1l1r6mKUlANhjsq9sPIaUu8Fo/edit?usp=sharing"
          target="_blank">
            <Button text={'Resume'} />
            </a>
        </div>
      </FlexItem>
      <FlexItem className="avatar">
        <img src={avatar} />
      </FlexItem>
    </StyledContainer>
  );
}
