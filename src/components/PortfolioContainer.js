import React, { useState } from 'react';
import { Container } from './styles/Container.styled';
import { StyledContent } from './styles/ContentBody.styled';
import Nav from './navbar/Nav';
import Footer from './Footer';
import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <StyledContent>
      {renderPage()}
      </StyledContent>
      <Footer />
    </Container>
  );
}
