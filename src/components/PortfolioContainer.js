import React, { useState } from 'react';
import { Container } from './styles/Container.styled';
import { StyledContent } from './styles/ContentBody.styled';
import Nav from './Header/Header';
import Footer from './Footer/Footer';
import About from './Pages/About/About';
import Work from './Pages/Projects/Work';
import Skills from './Pages/Resume/Skills';
import Contact from './Pages/Contact/Contact';

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
