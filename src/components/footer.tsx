import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top: 2px solid #b362ff;
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: white;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 2px solid #b362ff;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: white;
      border: none;
      color: #b362ff;
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
      <a
        href="https://github.com/danutzcodrescu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope fa-2x" />
      </a>
    </Container>
  );
}
