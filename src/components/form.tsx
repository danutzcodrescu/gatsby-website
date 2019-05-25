import * as React from 'react';
import styled from 'styled-components';

const Hidden = styled.p`
  display: none;
`;

const Container = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: auto minmax(3rem, 1fr);
  grid-gap: 1rem;
`;

const Btn = styled.button`
  background-color: ${props => props.theme.palette.gold};
  outline: none;
  color: ${props => props.theme.palette.hover};
  border: none;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 7px;
  &:hover {
    background-color: ${props => props.theme.palette.contrast};
  }
`;

export function Form() {
  return (
    <form
      name="contact-blog"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success"
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
      <Btn type="submit">Send</Btn>
    </form>
  );
}
