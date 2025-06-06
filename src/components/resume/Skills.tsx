import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

interface Skill {
  header: string;
  content: string;
}

const SkillsSection = styled.div`
  margin-bottom: 2.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 3fr;
  align-items: start;
  gap: 2rem 2rem;
`;

const SkillHeader = styled.h4`
`;

const SkillContent = styled.p`
`;

const SectionTitle = styled.h3`
`;

const Skills: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      markdownRemark(fileAbsolutePath: { regex: "/resume\\/skills.md$/" }) {
        frontmatter {
          skills {
            header
            content
          }
        }
      }
    }
  `);

  const skills: Skill[] = data?.markdownRemark?.frontmatter?.skills || [];

  return (
    <SkillsSection className="resume-section">
      <SectionTitle>SKILLS</SectionTitle>
      <SkillsGrid>
        {skills.map((skill, idx) => (
          <React.Fragment key={idx}>
            <SkillHeader>{skill.header}</SkillHeader>
            <SkillContent>{skill.content}</SkillContent>
          </React.Fragment>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills; 