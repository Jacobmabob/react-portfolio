import React from "react";
import { StyledNav } from "../styles/nav-styles/Nav.styled";
import NavTabs from "./NavTabs";
import Logo from "./Logo";

export default function Nav ({ currentPage, handlePageChange }) {
  return (
    <StyledNav>
      <Logo />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </StyledNav>
  )
}


