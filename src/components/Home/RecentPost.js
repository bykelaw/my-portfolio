import React from 'react'
import styled from "styled-components"
import HomeStyle from './HomeStyle';
import text from "../../text.json"
import PostCard from "./PostCard";
const RecentPostStyle = styled(HomeStyle)`
  position: relative;
  background-color: var(--light2);


  div + div {
    margin-top: 1rem;
  }
  grid-template-columns: 1fr 1fr;
  .view-all {
    color: var(--secondary);
    cursor: pointer;
    justify-content: end;
    align-items: center;
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 1rem;
  }
  h5 {
    text-align: left;
    display: inline-block;
  }
  @media (max-width: 37.5rem) {
    padding: 0 0.625rem 2.375rem;
  }

  @media (min-width: 37.5rem) {
    div + div {
      margin-top: unset;
      margin-left: 1.25rem;
    }
    h5 {
      text-align: left;
    }
    .view-all{
      position: static;
      display:flex;
    }
  }
`;

function RecentPost() {
  return (
    <RecentPostStyle>
      <h5>Recent posts</h5>
      <p class="view-all">View all</p>
      {text.home.recent_posts.map((item) => (
        <PostCard
          title={item.title}
          date={item.date}
          key={item.date + item.title}
          topic={item.topic}
          text={item.text.substring(0, 250) + "..."}
        />
      ))}
    </RecentPostStyle>
  );
}

export default RecentPost
