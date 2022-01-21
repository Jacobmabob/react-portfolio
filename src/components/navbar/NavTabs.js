import React from 'react';
import { StyledNavUl } from '../styles/nav-styles/NavUl.styled';



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <StyledNavUl>
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </a>
      </li>
      <li>
        <a
          href="#skills"
          onClick={() => handlePageChange('Skills')}
          className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </StyledNavUl>
  );
}

export default NavTabs;
