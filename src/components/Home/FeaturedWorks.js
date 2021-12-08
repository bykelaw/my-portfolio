import React from 'react'
import styled from 'styled-components'
import { digifigs, swiftbranding } from "../../assets";
import FeaturedWorksCard from "./FeaturedWorksCard";
import HomeStyle from './HomeStyle'

const Wrapper = styled(HomeStyle)`
  div + div {
    margin-top: 1.650rem;
  }
`;
function FeaturedWorks() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default FeaturedWorks
