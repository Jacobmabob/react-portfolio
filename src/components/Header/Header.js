import React from "react";
import { StyledNav } from "../styles/nav_styles/Nav.styled";
import NavTabs from "./Navigation";
import Logo from "./Logo";

export default function Nav ({ currentPage, handlePageChange }) {
  return (
    <StyledNav>
      <Logo />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </StyledNav>
  )
}


