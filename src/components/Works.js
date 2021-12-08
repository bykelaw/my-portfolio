import React from 'react'
import text from "../text.json"
import styled from "styled-components";
import FeaturedWorksCard from './Home/FeaturedWorksCard'
import * as assets from "../assets";

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
      {text.home.featured_works.map((item) => (
        <FeaturedWorksCard
          image={assets[item.image]}
          title={item.title}
          year={item.year}
          topic={item.topic}
          text={item.text.substring(0, 250) + "..."}
        />
      ))}
    </WorksStyle>
  );
}

export default Works
