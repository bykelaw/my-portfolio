import React, { useState } from "react";
import styled from 'styled-components'
import { Navigation } from "@styled-icons/fluentui-system-filled/Navigation";
import Nav from './Nav'

const Sidebar = styled.div`
  padding: 3.125rem 1.125rem;
  font-size: 1.875rem;

  div + div {
    margin-top: 3rem;
  }
  .blog{
    padding-top:1.875rem;
  }

  position: fixed;
  top: 0;
  bottom:0;
  background-color: white;
  width: 100%;
  transform: ${(props) =>
    props.showSidebar ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.5s;
  z-index:1;


`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Nav onClick={toggle} />
      <Sidebar showSidebar={ isOpen }>
        <div className="blog">Blog</div>
        <div className="works">Works</div>
        <div className="contact">Contact</div>
      </Sidebar>
    </>
  )
}

export default Header
