import React from 'react'
import PostCard from "./Home/PostCard";
import text from "../text.json"
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
      {text.home.recent_posts.map((item) => (
        <PostCard
          title={item.title}
          date={item.date}
          key={item.date + item.title}
          topic={item.topic}
          text={item.text.substring(0, 250) + "..."}
        />
      ))}
    </Wrapper>
  );
}

export default Blog
