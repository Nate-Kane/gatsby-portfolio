import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

interface School {
  name: string;
  location: string;
  timeline: string;
  achievements: string[];
}

const SectionTitle = styled.h3``;
const EducationSection = styled.div``;
const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 3fr;
  align-items: start;
  gap: 2rem 2rem;
`;
const SchoolInfo = styled.div``;
const SchoolAchievements = styled.div``;

const Education: React.FC = () => {
  const data = useStaticQuery(graphql`
    query EducationQuery {
      markdownRemark(fileAbsolutePath: { regex: "/resume\/education.md$/" }) {
        frontmatter {
          schools {
            name
            location
            timeline
            achievements
          }
        }
      }
    }
  `);

  const schools: School[] = data?.markdownRemark?.frontmatter?.schools || [];

  return (
    <EducationSection className="resume-section">
      <SectionTitle>EDUCATION</SectionTitle>
      <EducationGrid>
        {schools.map((school, idx) => [
          <SchoolInfo key={`info-${idx}`}>
            <h4>{school.name}</h4>
            <h5>{school.location}<br/>{school.timeline}</h5>
          </SchoolInfo>,
          <SchoolAchievements key={`achieve-${idx}`}>
            {school.achievements.length > 1 ? (
              <ul>
                {school.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{school.achievements[0]}</p>
            )}
          </SchoolAchievements>
        ])}
      </EducationGrid>
    </EducationSection>
  );
};

export default Education; 