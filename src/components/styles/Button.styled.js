import styled from "styled-components";

export const StyledButton = styled.button`
  & {
  margin-right: 12px;
  text-decoration: none;
  font-family: inherit;
  font-size: 1rem;
  width: 100px;
  padding: .3rem 0;
  position: relative;
  background-color: transparent;
  border: 1px solid black;
  font-weight: 500;
  }

  :hover {

    border: none;
    width: 115px;
    padding: .5rem 0;

    ::before{
      margin: 0;
      right: 0;
      top:0;
    }
  }

  ::before {
    background-color: #DB5461;
    content: "";
    margin-top: -1px; 
    position: absolute;
    margin-left: -10px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: 150ms margin;
  }

// /* CSS */
//  {
//   font-size: 16px;
//   font-weight: 200;
//   letter-spacing: 1px;
//   padding: 13px 20px 13px;
//   outline: 0;
//   border: 1px solid black;
//   cursor: pointer;
//   position: relative;
//   background-color: rgba(0, 0, 0, 0);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// ::after {
//   content: "";
//   background-color: #ffe54c;
//   width: 100%;
//   z-index: -1;
//   position: absolute;
//   height: 100%;
//   top: 7px;
//   left: 7px;
//   transition: 0.2s;
// }

// ::hover:after {
//   top: 0px;
//   left: 0px;
// }



`