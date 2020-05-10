import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.nav`

`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lobby">Lobby</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
    </StyledNavigation>
  )
}