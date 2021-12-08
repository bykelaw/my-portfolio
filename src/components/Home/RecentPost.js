import React from 'react'
import styled from "styled-components"
import HomeStyle from './HomeStyle';
import PostCard from './PostCard';
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
      <PostCard
        title='Making a design system from scratch'
        date='12 Feb 2020'
        topic='Design, Pattern'
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
      <PostCard
        title='Making a design system from scratch'
        date='12 Feb 2020'
        topic='Design, Pattern'
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' />
      
    </RecentPostStyle>
  )
}

export default RecentPost
