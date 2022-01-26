import styled from "styled-components";
import { device } from "../utils/devices";

export const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.4rem;

    h2 {
        font-size: 1.2em;
        font-weight: 400;
        border-bottom: 1px solid #F2F2F2;
        margin: .7rem .3rem;
        
    }

    @media ${device.tablet} {
        flex-direction: row;
        font-size: 2rem;

`