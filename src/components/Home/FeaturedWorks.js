import React from "react";
import styled from "styled-components";

import {PostCardStyle} from "./PostCard";

const FeaturedStyle = styled(PostCardStyle)`
  img {
    width:calc(100% - 2.25rem);
    padding: 0 1.125rem;
    border-radius:6px;
    margin-bottom:1rem;

  }
  p > span:first-child{
    font-size:400;
    background:var(--dark);
    color:white;
    height: 1.5625rem;
    padding:0 0.75rem;
    border-radius:0.75rem;

  }
  p > span:last-child{
    color:var(--light)
  }
  p > span:last-child::before {
    background: transparent;
    color:var(--light)
  }
`;

function FeaturedWorks({ image, title, year, topic, text }) {
  return (
    <>
      <FeaturedStyle>
        <img src={image} alt={`${image}`} />
        <h2>{ title }</h2>
        <p>
          <span>{ year }</span>
          <span>{ topic }</span>
        </p>
        <p>{ text }</p>
      </FeaturedStyle>
    </>
  );
}

export default FeaturedWorks;
