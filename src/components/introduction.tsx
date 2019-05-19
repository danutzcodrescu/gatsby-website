import * as React from 'react';
import styled from 'styled-components';

const IntroductionP = styled.p`
  color: #fad000;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Introduction = () => (
  <IntroductionP>
    SHUCKS! YOU WANNA KNOW MORE ABOUT ME? <i className="fas fa-heart" />
  </IntroductionP>
);
