import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "@styled-icons/fluentui-system-filled/Navigation";

const NavStyle = styled.div`
  position: sticky;

  padding: 1.25rem 0 0.75rem 0;
  top: 0;
  background: white;
  z-index: 3;
  display: flex;

  .nav-btn {
    display: block;
    width: 1.875rem;
    margin-left: auto;
    margin-right: 1.125rem;
  }
  .blog,
  .works,
  .contact {
    display: none;
  }
  .home {
    flex-grow: 1;
    margin-left: 1.125rem;
  }

  @media (min-width: 37.5rem) {
    .active {
      color: var(--primary);
    }
    .blog,
    .works,
    .contact {
      display: block;
      text-shadow: 0 0 1px var(--primary);
      transition: all 0.5s;
      font-size: 1.25rem;
      &:hover {
        text-shadow: 0 0 10px;
      }
    }
    .home {
      flex-grow: 1;
      margin-left: 3.75rem;
    }
    & > a + a {
      margin-left: 2rem;
    }
    .contact {
      margin-right: 3.75rem;
    }
    .nav-btn {
      display: none;
    }
  }
`;
const Nav = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavStyle>
      <NavLink to="/" className="home">Logo</NavLink >
      <NavLink to="/blog" className="blog">Blog</NavLink >
      <NavLink to="/works" className="works">Works</NavLink >
      <NavLink to="/contact" className="contact">Contact</NavLink >
      <Navigation onClick={onClick} className="nav-btn" />
    </NavStyle>
  );
};
export default Nav;
