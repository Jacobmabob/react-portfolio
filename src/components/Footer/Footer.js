import React from "react";
import { StyledFooter } from "../styles/Footer.styled";
import github from '../../assets/images/github.svg'
import linkedin from '../../assets/images/linkedin.svg'

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/Jacobmabob" target="_blank"><img src={github}></img></a>
      <a href="https://www.linkedin.com/in/jacob-mccarthy-65659321b/ " target="_blank"><img src={linkedin}></img></a>
    </StyledFooter>
  )
}