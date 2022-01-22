import styled from "styled-components";
import { device } from "../devices"

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;


  @media ${device.mobileS} {
    display: block;
  }

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
  }

  @media ${device.laptop} {
    display: flex;
  }
`