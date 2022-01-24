import styled from "styled-components";
import { device } from './devices'

export const StyledContent = styled.div`

  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 500;
    letter-spacing: .1rem;
  }

  h1::before {
    background-color: #ffee93;
    content: "";
    margin: 0 auto;
    margin-top: 30px; 
    position: absolute;
    margin-left: -7px;
    width: 130px;
    height: 20px;
    z-index: -1;
  }

  h3 {
    margin: .25rem ;
    font-weight: 600;
  }


  @media ${device.mobileS} {
    padding: 0 1rem;
  }

  @media ${device.mobileL} {
    padding: 0 4rem;
  }

  @media ${device.tablet} {
    padding: 0 4rem;
  }

  @media ${device.laptop} {
    padding: 0 10rem;
  }

  @media ${device.laptopL} {
    padding: 0 10rem;
  }
`