import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  width: 100%;
  color: var(--primary-color, #fff);
  text-align: center;
  font-size: var(--font-size-xs, 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
`;

const FooterLinks = styled.div`
  margin-left: 20px;
  a {
    color: var(--primary-color, #fff);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
    &:hover {
      color: rgb(52, 74, 134);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>© {new Date().getFullYear()} Nate Kane</div>
      <FooterLinks>
        <a href="mailto:ndkane3@gmail.com">ndkane3@gmail.com</a>
        &nbsp;|&nbsp;
        <a href="https://github.com/Nate-Kane" target="_blank" rel="noopener noreferrer">GitHub</a>
        &nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/nathandkane/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer; 