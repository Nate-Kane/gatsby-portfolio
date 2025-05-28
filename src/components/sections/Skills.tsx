import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

interface SkillItem {
  logo: string;
  name: string;
}

interface SkillsNode {
  frontmatter: {
    title: string;
    specialization: SkillItem[];
    toolkit: SkillItem[];
    extended: SkillItem[];
  };
}

const SkillsContainer = styled.div`
  display: flex;
  padding: 30px 0;
  flex-wrap: wrap;
`;

const SkillItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const SkillLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 0.7rem;
  filter: grayscale(0.2) brightness(1.2) opacity(0.7);
`;

const SkillName = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-align: center;
`;

const Skills: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "Skills" } } }
      ) {
        nodes {
          frontmatter {
            title
            specialization {
              logo
              name
            }
            toolkit {
              logo
              name
            }
            extended {
              logo
              name
            }
          }
        }
      }
    }
  `);

  const skillsNode: SkillsNode | undefined = data.allMarkdownRemark.nodes[0];

  const renderSkillGrid = (skills: SkillItem[] = []) => (
    <SkillsContainer>
      {skills.map(skill => (
        <SkillItemDiv key={skill.name}>
          <SkillLogo src={skill.logo} alt={skill.name} />
          <SkillName>{skill.name}</SkillName>
        </SkillItemDiv>
      ))}
    </SkillsContainer>
  );

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        {skillsNode && (
          <>
            <h3>Specialization</h3>
            {renderSkillGrid(skillsNode.frontmatter.specialization)}
            <h3>Toolkit</h3>
            {renderSkillGrid(skillsNode.frontmatter.toolkit)}
            <h3>Extended</h3>
            {renderSkillGrid(skillsNode.frontmatter.extended)}
          </>
        )}
      </div>
    </section>
  );
};

export default Skills; 