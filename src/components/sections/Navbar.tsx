import React, { useState } from "react";
import styled from "@emotion/styled";

// Styled components
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 36px 0 16px;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
`;

const NavbarBrand = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 101;
  position: relative;
`;

const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  width: 48px;
  height: 32px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    
    &:nth-of-type(1) {
      top: ${props => props.isOpen ? '18px' : '0px'};
      transform: ${props => props.isOpen ? 'rotate(135deg)' : 'rotate(0deg)'};
    }
    
    &:nth-of-type(2) {
      top: ${props => props.isOpen ? '0px' : '14px'};
      opacity: ${props => props.isOpen ? '0' : '1'};
      left: ${props => props.isOpen ? '60px' : '0px'};
      transform: ${props => props.isOpen ? 'rotate(-250deg) scale(0.25)' : 'rotate(0deg) scale(1)'};
    }
    
    &:nth-of-type(3) {
      top: ${props => props.isOpen ? '18px' : '28px'};
      transform: ${props => props.isOpen ? 'rotate(-135deg)' : 'rotate(0deg)'};
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
  gap: 50px;
  text-align: center;
`;

const NavItem = styled.li`
  font-size: 42px;
  font-weight: 500;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 50%;
      background-color: white;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    
    &:hover {
      color: white;
      
      &:after {
        width: 100%;
      }
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
          <HamburgerIcon isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerIcon>
        </MenuButton>
      </NavbarContent>
      
      <MenuOverlay isOpen={isMenuOpen}>
        <NavList onClick={() => setIsMenuOpen(!isMenuOpen)}>
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