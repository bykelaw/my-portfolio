import React from "react";
import styled from "styled-components";
import { digifigs, swiftbranding } from "../assets";

const Wrapper = styled.div`
  background-color: white;
  padding: 0.7rem 1.25rem 1.375rem;
  border-radius: 0.25rem;
  h2 {
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 1.875rem;
  }
  p {
    font-weight: 400;
    line-height: 1.5rem;
    margin: 0.75rem 0 1.25rem;

    & > span {
      display: inline-block;
    }
    span + span {
      margin-left: 3rem;
    }
  }

  img {
    width: calc(100% - 2.25rem);
    padding: 0 1.125rem;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
  p > span:first-child {
    font-size: 400;
    background: var(--primary);
    color: white;
    height: 1.5625rem;
    padding: 0 0.75rem;
    border-radius: 0.75rem;
  }
  p > span:last-child {
    color: var(--light);
  }
  @media (min-width: 37.5rem) {
    padding-left: 15%;
    padding-right: 15%;
    h2 {
      font-weight: 700;
      font-size: 1.875rem;
      line-height: 1.875rem;
    }
    h2  + p,p + p{
      margin-top: 1.875rem;
    }
    p  + img{
      margin-top: 2.875rem;
    }
  }
`;
const Section = ({ image, title, year, topic, text }) => (
  <Wrapper>
    <h2>{title}</h2>
    <p>
      <span>{year}</span>
      <span>{topic}</span>
    </p>
    <p>{text}</p>
    <img src={image} alt={`${image}`} />
  </Wrapper>
);

function WorkDetail() {
  return (
    <>
      <Section
        image={digifigs}
        title="Digifigs Landing page"
        year="2021"
        topic="Landing Page"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <Section
        image={swiftbranding}
        title="Swiftbranding"
        year="2020"
        topic="Landing Page"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
    </>
  );
}

export default WorkDetail;
