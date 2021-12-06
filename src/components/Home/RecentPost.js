import React from 'react'
import styled from "styled-components"
import PostCard from './PostCard';
const RecentPostStyle = styled.div`
  background-color: var(--light2);
  padding: 0 0.625rem 2.375rem;
  div + div {
    margin-top: 1rem;
  }

`;

function RecentPost() {
  return (
    <RecentPostStyle>

      <h5>Recent posts</h5>
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
