import React, { useState } from "react";
import styled from "@emotion/styled";

// Styled components
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem 0;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 101;
  
  svg {
    width: 24px;
    height: 24px;
    
    path {
      fill: white;
    }
  }
`;

const MenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(41, 98, 255, 0.15);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  transform: translateX(${props => props.isOpen ? "0" : "100%"});
  z-index: 99;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const NavItem = styled.li`
  font-size: 2rem;
  font-weight: 500;
  
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarBrand>Nate Kane</NavbarBrand>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-close">
              <path className="secondary" fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-menu">
              <path className="secondary" fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          )}
        </MenuButton>
      </NavbarContent>
      
      <MenuOverlay isOpen={isMenuOpen}>
        <NavList>
          <NavItem><a href="#about">About</a></NavItem>
          <NavItem><a href="#projects">Projects</a></NavItem>
          <NavItem><a href="#skills">Skills</a></NavItem>
          <NavItem><a href="#contact">Contact</a></NavItem>
        </NavList>
      </MenuOverlay>
    </NavbarContainer>
  );
};

export default Navbar;

// menu svg:
/* 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-menu"><path class="secondary" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
*/

/**
 * close icon svg
 * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-close"><path class="secondary" fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
 */