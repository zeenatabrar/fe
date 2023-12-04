// Navbar.js
import React from 'react';
import styled from 'styled-components';

// Styled components
const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Li = styled.li`
  margin-right: 20px;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    color: #00bcd4;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Ul>
        <Li>
          <A href="/">Contact Management</A>
        </Li>
        <Li>
          <A href="/appointment">Appointment Scheduling</A>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;