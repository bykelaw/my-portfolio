import React from 'react'
import styled from "styled-components"
import FeaturedWorks from './FeaturedWorks'
import { digifigs } from "../../assets";
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
      <FeaturedWorks
        image={digifigs}
        title="Digifigs Landing page"
        year="2021"
        topic="Landing Page"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <hr />
      <Footer/>
    </HomeStyle>
  );
}

export default Home
