import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

interface Position {
  company: string;
  position: string;
  location: string;
  timeline: string;
  responsibilities: string[];
}

const ExperienceSection = styled.div``;
const SectionTitle = styled.h3``;
const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 3fr;
  align-items: start;
  gap: 2.5rem 3rem;
`;
const PositionInfo = styled.div``;
const Responsibilities = styled.div``;
const CompanyName = styled.h2`
  margin-bottom: 5px;
`
const PositionName = styled.h4``

const Experience: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ExperienceQuery {
      markdownRemark(fileAbsolutePath: { regex: "/resume\\/experience.md$/" }) {
        frontmatter {
          positions {
            company
            position
            location
            timeline
            responsibilities
          }
        }
      }
    }
  `);

  const positions: Position[] = data?.markdownRemark?.frontmatter?.positions || [];

  return (
    <ExperienceSection className="resume-section">
      <SectionTitle>Experience</SectionTitle>
      <ExperienceGrid>
        {positions.map((pos, idx) => [
          <PositionInfo key={`info-${idx}`}>
            <CompanyName>{pos.company}</CompanyName>
            <PositionName>{pos.position},</PositionName>
            <h5>{pos.location} <br/> {pos.timeline}</h5>
          </PositionInfo>,
          <Responsibilities key={`resp-${idx}`}>
            <ul>
              {pos.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Responsibilities>
        ])}
      </ExperienceGrid>
    </ExperienceSection>
  );
};

export default Experience; 