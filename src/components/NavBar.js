import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import "rsuite/dist/rsuite.css";
const NavBar = () => (
  <Navbar>
    <Navbar.Brand href="#"></Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />} href="/">Home</Nav.Item>
         {/* <Nav.Menu title="Contact">
        <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu> */} 
      <Nav.Item href="contact">Contact</Nav.Item>  
      <Nav.Item href="about">About</Nav.Item>
      <Nav.Item href="products"> Products</Nav.Item>
      {/* <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
      </Nav.Menu> */}
      
    </Nav>
    {/* <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav> */}
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
);
export default NavBar;
