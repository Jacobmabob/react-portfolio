import styled from "styled-components";
import { device } from "../utils/devices";

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;


    
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