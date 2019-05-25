// @ts-ignore
import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container } from '../pages/about';

interface Props {
  children: React.ReactNode;
  data: any;
  location: Location;
}
export default function MdTemplate(props: Props) {
  return (
    <Layout path={props.location.pathname}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Container>{props.children}</Container>
    </Layout>
  );
}
