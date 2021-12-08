import React from 'react'
import styled from "styled-components"
import FeaturedWorks from './FeaturedWorks'
import RecentPost from './RecentPost'
import Section1 from "./Section1"
import Footer from '../Footer';
const HomeStyle = styled.div`
hr{
  color:var(--light3);
  margin: 0 1.125rem;
}

`


function Home() {
  return (
    <HomeStyle>
      <Section1 />
      <RecentPost />
      <h5>Feature works</h5>
      <FeaturedWorks/>
      <hr />
    </HomeStyle>
  );
}

export default Home
