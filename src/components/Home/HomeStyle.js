import styled from "styled-components";

const HomeStyle = styled.div`
  padding: 0 1.5rem 3.75rem;
  h1 {
    font-size: 1.875rem;
    line-height: 2.5rem;
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
    padding: 2.75rem 2.25rem;

    button {
      margin: unset;
      width: fit-content;
    }
    p {
      font-size: 0.875rem;
    }
    h1 {
      font-size: 1.4rem;
    }
    button {
      font-size: 1rem;
    }
  }

  @media (min-width: 50rem) {
    padding: 3.75rem 4.25rem;

    p {
      font-size: 1rem;
    }
    h1 {
      font-size: 1.875rem;
    }
  }
  @media (min-width: 56.25rem) {
    padding: 4.75rem 6.25rem;

    button {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 62.5rem) {
    padding: 8.75rem 9.25rem;
  }
`;
export default HomeStyle;
