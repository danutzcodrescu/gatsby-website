import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  min-height: inherit;
  padding: 1rem;
  > * {
    width: 100%;
  }
  h1 {
    margin: 1rem;
    font-size: 2rem;
  }
`;

const IndexPage = () => (
  <Layout path={'/'}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
    {/* <Image /> */}
    {/* </div> */}
    <Container>
      <div>
        <h1>Danut Codrescu</h1>

        <h3>
          Fullstack developer <i className="fas fa-laptop-code" /> | Javascript
          addict <i className="fab fa-js-square" /> | Sports enthusiast{' '}
          <i className="fas fa-running" />
        </h3>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
