import styled from "styled-components";
import { device } from "../devices"

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;




  @media ${device.mobileS} {
    display: block;
    div:first-child {
      margin-top: 1rem;
    }
  }

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    div:first-child {
      margin-top: 6rem;
    }
  }

  @media ${device.laptop} {
    display: flex;
  }
`