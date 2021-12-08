import React from 'react'
import styled from "styled-components"
import HomeStyle from './HomeStyle';
import text from "../../text.json"
import PostCard from "./PostCard";
const RecentPostStyle = styled(HomeStyle)`

  background-color: var(--light2);

  @media (max-width: 37.5rem) {
  padding: 0 0.625rem 2.375rem;
  
  }

  div + div {
    margin-top: 1rem;
  }
  grid-template-columns: 1fr 1fr;
  .view-all{
    color:var(--secondry);
    cursor:pointer;
    justify-content:end;
    align-items:center;
    display:flex;
  }


  @media (min-width: 37.5rem) {
    div + div {
      margin-top: unset;
      margin-left: 1.25rem;
    }
    h5{
      text-align:left;
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
