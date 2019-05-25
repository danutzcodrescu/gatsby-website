import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top: 2px solid ${props => props.theme.palette.contrast};
  padding: 1rem 0;
  box-sizing: border-box;

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    justify-content: center;

    a:nth-child(3) {
      justify-self: center;
      grid-column: span 2;
    }
  }

  a {
    text-decoration: none;
    color: white;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 2px solid ${props => props.theme.palette.contrast};
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.7s;
    &:hover {
      background-color: ${props => props.theme.palette.primary};
      border: none;
      color: ${props => props.theme.palette.contrast};
      transform: scale(1.3);
    }
    @media (max-width: 375px) {
      margin: 0.5rem 0;
      transform: none;
    }
  }
`;

export function Footer() {
  return (
    <Container>
      <a
        href="https://github.com/danutzcodrescu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github fa-2x" />
      </a>
      <a
        href="https://github.com/danutzcodrescu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin fa-2x" />
      </a>
      <Link to="/contact">
        <i className="fas fa-envelope fa-2x" />
      </Link>
    </Container>
  );
}
