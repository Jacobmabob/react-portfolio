import styled from "styled-components";

export const StyledNavUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  a {

  }

  a, a:link, a:visited, a:hover, a:active, a:focus {
    text-decoration: none;
    color: #403b3b;
  }

  a:active, a:focus, a:hover {
    border-bottom: 2px solid #929292;
  }

  li {
    padding: 0 0.25rem;
    text-decoration: none;
  }
`