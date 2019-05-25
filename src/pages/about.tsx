import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const Container = styled.div`
  max-width: 700px;
  padding: 1.45rem 1.0875rem;
  color: ${props => props.theme.palette.primary};
  margin: 0 auto;
  text-align: justify;
  > * {
    margin: 1.5rem 0;
  }
`;

const Introduction = styled.p`
  color: #fad000;
  font-weight: 800;
  text-transform: uppercase;
`;

const AboutPage = () => (
  <Layout path="/about">
    <SEO title="About" />
    <Container>
      <Introduction>
        SHUCKS! YOU WANNA KNOW MORE ABOUT ME? <i className="fas fa-heart" />
      </Introduction>
      <p>
        I love to solve <del>all some one</del> technological problems.
      </p>
      <h1>
        Hi! I&apos;m Danut <i className="fas fa-handshake" />
      </h1>
      <p>
        I am a selftaught fullstack developer specialized in Javascript
        ecosystem, who loves to build robust and scalable applications, playing
        with the newest technologies and tools. Due to my continuous learning
        and growth process I am able to provide sound technogical answers to the
        the most complex issues.
      </p>

      <p>
        In my spare time I like to spend time with my girlfriend, practice and
        watch various sports and read a sci-fi book.
      </p>
    </Container>
  </Layout>
);

export default AboutPage;
