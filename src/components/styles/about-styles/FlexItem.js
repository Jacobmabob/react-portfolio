import styled from "styled-components";
import { device } from "../devices";

export const FlexItem = styled.div`
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;

    
    avatar{
        display: none;

        @media ${device.mobileL} {
            display: flex;
          }
    }


`