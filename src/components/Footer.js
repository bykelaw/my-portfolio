import React from 'react'
import styled from "styled-components"
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 9.375rem;
  height: 11.375rem;

  div > * {
    width: 1.875rem;
    height: 1.875rem;
  }
  div > * + * {
    margin-left: 2.25rem;
  }
  p {
    margin-top: 2rem;
    font-size: 0.875rem;
  }
`;
function Footer() {
  return (
    <FooterStyle>
      <div>
        <Facebook />
        <Instagram />
        <Twitter />
        <Linkedin/>
      </div>
      <p>Copyright ©2021 All rights reserved </p>
    </FooterStyle>
  )
}

export default Footer
