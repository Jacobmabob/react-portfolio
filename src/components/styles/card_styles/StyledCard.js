import styled from "styled-components";

export const StyledCard = styled.div`

  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 450px;
  max-height: 550px;
  margin: 5rem 1rem;
  // padding: 6rem 0;
  position: relative;
  border: solid 1px #F8F8F8;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  
  p {
    margin: 1rem .5rem;
  }

  h3 {
    font-size: 1.3rem;
    margin: .8rem .5rem;
  }

  .tags {
    font-size: .8rem;
  }

  img {
    width: 100%;
    height: 100%
    position: relative;
    transition: opacity 100ms;

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