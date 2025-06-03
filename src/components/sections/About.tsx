import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const AboutSection = styled.section`
  padding: 80px 0;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 48px;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Portrait = styled(GatsbyImage)`
  border-radius: 20px;
  width: 430px;
  height: 500px;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
`;

const AboutText = styled.div`
  flex: 1;
  font-size: var(--font-size-md);
  color: var(--primary-color);
  line-height: 1.7;
`;

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "nk_portrait.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 430, height: 500, placeholder: BLURRED)
        }
      }
    }
  `);
  const imageData = getImage(data.portrait);

  return (
    <AboutSection className="about" id="about">
      <div className="container">
        <h2>About Nate</h2>
        <AboutContainer>
          {imageData && (
            <Portrait image={imageData} alt="Nate Kane portrait" />
          )}
          <AboutText>
            Nate Kane is a passionate software engineer who started writing code out of a love for creating things and solving problems. He gets a thrill out of tracking down tough bugs and bringing new features to life. Nate is married and lives in Utah with his wife, where he enjoys playing guitar and spending time outdoors—whether that's rock climbing, paddle boarding, or exploring new places. He brings creativity, curiosity, and a strong work ethic to every project he works on.
          </AboutText>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default About; 