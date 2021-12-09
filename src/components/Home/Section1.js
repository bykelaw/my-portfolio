import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
    a {
      margin-top: 1rem;
      box-shadow: 0 0 5px 2px var(--light);
      width:fit-content;
      transition: all 0.3s;
      &:hover{
        background-color:var(--light);
      }
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
      width: 15.1875rem;
      height: 15.1875rem;
    }
  }
  @media (min-width: 56.25rrem) {
    img {
      width: 15.1875rem;
      height: 15.1875rem;
    }
  }
  @media (min-width: 62.5rem) {
    img {
      width: 15.1875rem;
      height: 15.1875rem;
    }
    p {
      padding-right: 0.8rem;
      line-height: 1.4;
    }
  }
  @media (min-width: 75rem) {
    img {
      width: 22rem;
      height: 22rem;
    }
    p {
      padding-right: 10rem;
    }
    h1 {
      font-size: 3.5rem;
      line-height: 1.4;
      width: 40vw;
    }
    p {
      font-size: 1.8rem;
      line-height: 1.4;
    }
  }
`;

function Section1() {
  return (
    <Section1Style>
      <img src={me} alt="Lawrence" />
      {/* <h1>{text.home.section1.heading}</h1> */}
      <h1>{`Hi, I am Lawrence \n Software Engineer`}</h1>
      <p>{text.home.section1.text}</p>

      <Link to="/resume.pdf" target="_blank">
        <button>Download Resume</button>
      </Link>
    </Section1Style>
  );
}

export default Section1;
