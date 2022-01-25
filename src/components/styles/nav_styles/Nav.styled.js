import styled from "styled-components";
import { device } from "../utils/devices";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 1.2rem .5rem .5rem;
  background-color: #F8F8F8;
  border-bottom: 1px solid #F2F2F2;

  @media ${device.laptop} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

`