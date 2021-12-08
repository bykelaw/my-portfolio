import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { me } from "../../assets";
import HomeStyle from "./HomeStyle";
import text from "../../text.json"

const Section1Style = styled(HomeStyle)`

  img {
    display: block;
    height: 10.6875rem;
    width: 10.6875rem;
    margin: 2.0625rem auto;
    border-radius: 50%;
  }
  text-align: center;

  h1 {
    margin-top: 2.125rem;
    margin-bottom: 1.25rem;
  }

  p {
    line-height: 1.5rem;
    margin-bottom: 1.6875rem;
  }


  @media (min-width: 37.5rem) {
    grid-template-columns: 2.05fr 1fr;
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
      display: flex;
      align-items: end;
      padding-bottom: 0;
      margin-bottom: 2.5rem;
    }
    button {
      margin: unset;
      width: fit-content;
    }
    p {
      padding-top: 0;
    }
  
  }

  @media (min-width: 50rem) {
    img {
      width: 15.1875em;
      height: 15.1875em;
    }
 
  }
  @media (min-width: 56.25rem) {
    img {
      width: 15.1875em;
      height: 15.1875em;
    }
   
  }
  @media (min-width: 62.5rem) {
    img {
      width: 15.1875em;
      height: 15.1875em;
    }
    p {
      padding-right: 10rem;
    }
  }
`;

function Section1() {
  return (
    <Section1Style>
      <img src={me} alt="Lawrence" />
      <h1>{text.home.section1.heading}</h1>
      <p>{text.home.section1.text}</p>

      <button>Download Resume</button>
    </Section1Style>
  );
}

export default Section1;
