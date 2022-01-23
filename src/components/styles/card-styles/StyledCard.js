import styled from "styled-components";

export const StyledCard = styled.div`

  flex-grow: 1;
  max-width: 350px;
  margin: 6rem auto;
  // padding: 6rem 0;
  position: relative;
  border: solid 1px #F8F8F8;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  
  p {
    margin: 1rem .3rem;
  }

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