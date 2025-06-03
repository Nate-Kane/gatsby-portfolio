import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

const ResumeContainer = styled.div`
  width: 8.5in;
  min-height: 11in;
  background: #fff;
  color: #222;
  margin: 40px auto;
  box-shadow: 0 0 24px rgba(0,0,0,0.15);
  padding: 2.5rem 2.25rem;
  font-family: 'Source Sans Pro', 'Open Sans', Arial, sans-serif;
  font-size: 1.05rem;
  line-height: 1.5;
  position: relative;
  overflow: hidden;
  /* Scaling for mobile */
  @media (max-width: 900px) {
    transform: scale(0.6);
    transform-origin: top left;
    width: 100vw;
    min-width: 0;
    margin: 0;
    padding: 1rem;
  }
`;

const Resume: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ResumeMarkdownQuery {
      markdownRemark(frontmatter: { title: { eq: "Nate Kane Resume" } }) {
        html
      }
    }
  `);

  if (!data?.markdownRemark?.html) {
    return <div>Resume not found.</div>;
  }

  return (
    <ResumeContainer>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </ResumeContainer>
  );
};

export default Resume; 