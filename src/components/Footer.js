import React from "react";
import styled from "styled-components";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { NavLink } from "react-router-dom";
const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 9.375rem;
  height: 11.375rem;
div{
  display:flex;
}
  div > a {
    display:block;
    width: 1.875rem;
    height: 1.875rem;
  }
  div > a + a {
    margin-left: 2.25rem;
  }
  p {
    margin-top: 2rem;
    font-size: 0.875rem;
  }
  svg{
    height:100%;
    width: 100%;
  }
`;
function Footer() {
  return (
    <FooterStyle>
      <div>
        <a href="https://github.com/bykelaw">
          <Facebook />
        </a>
        <a href="https://github.com/bykelaw">
          <Instagram />
        </a>
        <a href="https://github.com/bykelaw">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/lawrence-ughonu">
          <Linkedin />
        </a>
      </div>
      <p>Copyright ©2021 All rights reserved </p>
    </FooterStyle>
  );
}

export default Footer;
