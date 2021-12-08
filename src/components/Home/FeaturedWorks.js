import React from 'react'
import styled from 'styled-components'
import * as assests from "../../assets";
import FeaturedWorksCard from "./FeaturedWorksCard";
import HomeStyle from './HomeStyle';
import text from "../../text.json"

const Wrapper = styled(HomeStyle)`
  div + div {
    margin-top: 1.650rem;
  }
`;
function FeaturedWorks() {
  return (
    <Wrapper>
      {text.home.featured_works.map((item) => (
        <FeaturedWorksCard
          image={assests[item.image]}
          title={item.title}
          year={item.year}
          topic={item.topic}
          text={item.text.substring(0,250) + "..."}
        />
      ))}
    </Wrapper>
  );
}

export default FeaturedWorks
