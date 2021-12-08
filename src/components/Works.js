import React from 'react'
import styled from 'styled-components'
import FeaturedWorksCard from './Home/FeaturedWorksCard'
import { digifigs, swiftbranding } from "../assets";

const WorksStyle = styled.div`
  @media (min-width: 37.5rem) {
    & > div {
      width: 42.5625rem;
      margin: auto;
    }
  }
`;
function Works() {
  return (
    <WorksStyle>
      <FeaturedWorksCard
        image={digifigs}
        title="Digifigs Landing page"
        year="2021"
        topic="Landing Page"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <FeaturedWorksCard
        image={swiftbranding}
        title="Swiftbranding"
        year="2020"
        topic="Landing Page"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
    </WorksStyle>
  );
}

export default Works
