import React, { ReactNode } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import "../../styles/global.css";

interface LayoutProps {
  children: ReactNode;
}

const pulseAndRotate = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.3) rotate(4deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${pulseAndRotate} 120s ease-in-out infinite;
  transform-origin: center center;
`;

const ScrollableContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 1;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "starry_sky_background.jpg" }) {
        publicURL
      }
    }
  `);

  const backgroundImageUrl = data.file?.publicURL;

  return (
    <BackgroundWrapper>
      <BackgroundImage imageUrl={backgroundImageUrl} />
      <ScrollableContent>
        {children}
      </ScrollableContent>
    </BackgroundWrapper>
  );
};

export default Layout; 