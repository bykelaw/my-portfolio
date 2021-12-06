import { useState } from "react";
import styled from "styled-components";
import { Navigation } from "@styled-icons/fluentui-system-filled/Navigation";

const NavStyle = styled.div`
  position: sticky;
  
  padding: 1.25rem 0 0.75rem 0;
  top: 0;
  background: white;
  z-index: 3;

  & > * {
    display:block;
  width: 1.875rem;
  margin-left:auto;
  margin-right:1.125rem;
  }

 
`;
const Nav = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavStyle>
      <Navigation onClick={onClick} />
    </NavStyle>
  );
};
export default Nav;
