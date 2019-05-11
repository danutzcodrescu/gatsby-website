import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const size = '1.75rem';

const Container = styled.header`
  border-bottom: 2px solid #b362ff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  a:first-of-type {
    margin-right: auto;
    text-decoration: none;
  }
`;

const H1 = styled.h1`
   {
    color: white;
    position absolute;
    top: 10px;
    font-size: ${size};
    letter-spacing: 5px;
    text-transform: uppercase;
    transition:all 0.3s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0s;
    transform: translate3d(-100%, 0px, 0px);
    display: block;
    z-index: 10;
    &.active {
      transform: translate3d(6rem, 0, 0);
    }
  }
`;

const Nav = styled.nav`
  text-transform: uppercase;
  font-weight: 900;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      margin: 0;
    }
    a {
      text-decoration: none;
      padding: 15px 20px 18px;
      color: white;
      font-size: 1.3rem;
      transition: box-shadow 150ms ease-in-out, color 150ms;
      box-shadow: 0px 0px 0px 0px #a599e9 inset;
      &:hover {
        color: black;
        box-shadow: 0px -4rem 0px 0px #a599e9 inset;
      }
    }
  }
`;

const Logo = styled.span`
  display: block;
  font-weight: 900;
  font-size: ${size};
  padding: 0.85rem;
  background-color: #fad000;
  color: black;
  position: relative;
  z-index: 100;
`;

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  function mouseOver() {
    setHovered(!hovered);
  }
  return (
    <Container>
      <Link to="/">
        <Logo onMouseOver={mouseOver} onMouseOut={mouseOver}>
          DC
        </Logo>
        <H1 className={hovered ? 'active' : ''}>Danut Codrescu</H1>
      </Link>
      <Nav>
        <ul>
          <li>
            <Link to="/" onMouseOver={mouseOver} onMouseOut={mouseOver}>
              About
            </Link>
          </li>
          <li>
            <Link to="/" onMouseOver={mouseOver} onMouseOut={mouseOver}>
              Blog
            </Link>
          </li>

          <li>
            <Link to="/" onMouseOver={mouseOver} onMouseOut={mouseOver}>
              Uses
            </Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
