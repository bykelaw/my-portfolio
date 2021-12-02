import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
div{
  width:30%;
  margin-right:auto;
  padding-right:60px;
  font-size:20px;
}
`
const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <NavLink to='/works'>Works</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    </Wrapper>
  )

}
export default Navbar; 