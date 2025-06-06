import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

const SkillsSection = styled.div`
  margin-bottom: 2.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 3fr;
  align-items: start;
  gap: 2.5rem 3rem;
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

  const skills = data?.markdownRemark?.frontmatter?.skills || [];

  return (
    <SkillsSection>
      <SectionTitle>SKILLS</SectionTitle>
      <SkillsGrid>
        {skills.map((skill: any, idx: number) => (
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