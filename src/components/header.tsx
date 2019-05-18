import { Link } from 'gatsby';
import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { DarkThemeProps } from 'theme/dark.theme';

const size = '1.75rem';

const Container = styled.header<DarkThemeProps>`
  border-bottom: 2px solid ${props => props.palette.contrast};
  box-sizing: border-box;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto auto auto;
  a:first-of-type {
    margin-right: auto;
    text-decoration: none;
  }
  @media (max-width: 375px) {
    a:first-of-type {
      grid-column: 1 / span 4;
      margin-bottom: 1rem;
    }
  }
`;

const H1 = styled.h1<DarkThemeProps>`
   {
    color: ${props => props.palette.primary};
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

const Nav = styled.nav<DarkThemeProps>`
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
      color: ${props => props.palette.primary};
      font-size: 1.3rem;
      transition: box-shadow 150ms ease-in-out, color 150ms;

      &:hover {
        color: ${props => props.palette.hover};
      }
      @media (min-width: 756px) {
        box-shadow: 0px 0px 0px 0px ${props => props.palette.contrast} inset;
        &: hover {
          box-shadow: 0px -4rem 0px 0px ${props => props.palette.contrast} inset;
        }
      }
    }
    @media (max-width: 375px) {
      justify-content: center;
    }
  }
`;

const Logo = styled.span<DarkThemeProps>`
  display: block;
  font-weight: 900;
  font-size: ${size};
  padding: 0.85rem;
  background-color: #fad000;
  color: ${props => props.palette.hover};
  position: relative;
  z-index: 100;
`;

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  function mouseOver() {
    if (window.innerWidth > 756) {
      setHovered(!hovered);
    }
  }
  return (
    <ThemeConsumer>
      {theme => (
        <Container {...theme}>
          <Link to="/">
            <Logo onMouseOver={mouseOver} onMouseOut={mouseOver} {...theme}>
              DC
            </Logo>
            <H1 className={hovered ? 'active' : ''} {...theme}>
              Danut Codrescu
            </H1>
          </Link>
          <Nav {...theme}>
            <ul>
              <li>
                <Link
                  to="/about"
                  onMouseOver={mouseOver}
                  onMouseOut={mouseOver}
                >
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
      )}
    </ThemeConsumer>
  );
};

export default Header;
