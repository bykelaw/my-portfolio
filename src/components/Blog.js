import React from 'react'
import PostCard from "./Home/PostCard";
import styled from "styled-components"
const Wrapper = styled.div`
& > div {
  border-bottom: 1px solid var(--light3);
}
  @media (min-width: 37.5rem) {
    padding-left: 15%;
    padding-right: 15%;
    h2 {
      font-weight: 700;
      font-size: 1.875rem;
      line-height: 1.875rem;
    }
    h2 + p,
    p + p {
      margin-top: 1.875rem;
    }
    p + img {
      margin-top: 2.875rem;
    }
  }
`;

function Blog() {
  return (
    <Wrapper>
      <PostCard
        title="Making a design system from scratch"
        date="12 Feb 2020"
        topic="Design, Pattern"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
    </Wrapper>
  );
}

export default Blog
