import styled from "styled-components";
import { device } from "../devices";

export const StyledContainer = styled.div`
    display: flex;
    min-width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        display: none;
    }

    h1 {
        font-size: 2.5rem;
    }

    h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    p {
        line-height: 1.9rem;
        font-size 1.3rem;
    }
    span {
        font-size: 1.5rem;
        font-weight: 500;
    }


        @media ${device.tablet} {
            display: flex;
            flex-direction: row;
            img {
                display: flex;
            }
          }
`