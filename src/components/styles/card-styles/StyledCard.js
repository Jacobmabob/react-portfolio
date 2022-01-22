import styled from "styled-components";

export const StyledCard = styled.div`

  flex-grow: 1;
  max-width: 350px;

  padding: 6rem .5rem;
  position: relative;
  border-bottom: 2px solid green;
  border-bottom-width: 50%;
  border-color: #657153;


  img {
    width: 100%;
    height: 100%
    position: relative;
    transition: opacity 100ms;

  }

  img::before {
    position: absolute;
    content: "Flasher";
    color: black;
    width: 30px;
    height: 50px;
  }

  img:hover {
    opacity: 30%;

    ::before {
      right:0;
      position: absolute;
      content: "Flasher";
    }
  }

`