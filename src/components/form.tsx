import * as React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { DarkThemeProps } from 'theme/dark.theme';

const Hidden = styled.p`
  display: none;
`;

const Container = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: auto minmax(3rem fr);
  grid-grap: 0.5rem;
`;

const Button = styled.button<DarkThemeProps>`
  background-color: ${props => props.palette.gold}
  outline: none;
  color: ${props => props.palette.hover};
  border: none;
  margin-top: 1rem;
`;

export function Form() {
  return (
    <ThemeConsumer>
      {theme => (
        <form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <Hidden>
            <label>
              Don’t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </Hidden>
          <Container>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
          </Container>
          <Button type="submit" {...theme}>
            Send
          </Button>
        </form>
      )}
    </ThemeConsumer>
  );
}
