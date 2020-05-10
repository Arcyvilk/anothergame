import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';

const StyledApp = styled.div`

`;

export default function App() {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Navigation />
        <Page />
      </Router>
    </StyledApp>
  );
}
