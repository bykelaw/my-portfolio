import React, { useState, useEffect, useRef } from "react";
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
  text-align: center;

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

  @media (min-width: 37.5rem) {
    display: grid;
    grid-template-columns: 2.05fr 1fr;
    padding: 2.75rem 2.25rem;
    justify-content: space-between;
    text-align: unset;
    p,
    h1 {
      padding-right: 1rem;
    }
    img {
      display: block;
      grid-row: 1/3;
      grid-column: 2/3;
      width: 15.1875em;
      height: 15.1875em;
    }
    h1 {
      grid-row: 1/2;
      grid-column: 1/2;
    }
    button {
      margin: unset;
      width: fit-content;
    }
    p {
      font-size: 0.875rem;
    }
    h1 {
      font-size: 1.6rem;
    }
    button {
      font-size: 1rem;
    }
  }

  @media (min-width: 50rem) {
    padding: 3.75rem 4.25rem;
    img {
      width: 15.1875em;
      height: 15.1875em;
    }
    h1 {
      font-size: 1.875rem;
    }
  }
  @media (min-width: 56.25rem) {
    padding: 4.75rem 6.25rem;
    img {
      width: 15.1875em;
      height: 15.1875em;
    }
    button {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 62.5rem) {
    padding: 8.75rem 9.25rem;
    img {
      width: 15.1875em;
      height: 15.1875em;
    }
  }
`;

function Section1() {
 
  return (
    <Section1Style >
      <img src={me}  alt="Lawrence" />
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
