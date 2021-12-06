import React from 'react'
import styled from 'styled-components'
import {me} from '../../assets'

const Section1Style = styled.div`
  padding: 0 1.5rem 3.75rem;

  img {
    display: block;
    height: 10.6875rem;
    width: 10.6875rem;
    margin: 2.0625rem auto;
    border-radius: 50%;
  }
  p,
  h1 {
    text-align: center;
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.5rem;
    margin-top: 2.125rem;
    margin-bottom: 1.25rem;
  }

  p {
    line-height: 1.4375rem;
    margin-bottom: 1.6875rem;
  }
  button {
    display: block;
    padding: 0.8125rem 1.25rem;
    color: white;
    background-color: var(--primary);
    font-size: 1.25rem;
    margin: auto;
  }
`;

function Section1() {
  return (
    <Section1Style>
      <img src={me} alt="Lawrence" />
      <h1>Hi, I am Lawrence, Creative Technologist</h1>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>

      <button>Download Resume</button>
    </Section1Style>
  );
}

export default Section1
