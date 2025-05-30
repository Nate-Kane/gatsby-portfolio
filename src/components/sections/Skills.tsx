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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  padding: 0 25px;

  @media (max-width:500px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;

const SkillItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 60px;
  height: 80px;
  @media (max-width: 700px) {
    width: 40px;
    height: 60px;
  }
  &:hover img {
    transform: translateY(-8px);
    opacity: 1;
    filter: none;
  }
  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillLogo = styled.img`
  width: 60px;
  height: 60px;
  filter: grayscale(0.2) brightness(1.2) opacity(0.7);
  opacity: 0.85;
  transition: transform 0.2s, filter 0.2s, opacity 0.2s;

  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
  }
`;

const SkillName = styled.div`
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 1px;
  opacity: 0;
  width: max-content;
  white-space: nowrap;
  margin-top: 10px;
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
  const allSkills: SkillItem[] = [
    ...(skillsNode?.frontmatter.specialization || []),
    ...(skillsNode?.frontmatter.toolkit || []),
    ...(skillsNode?.frontmatter.extended || []),
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <SkillsContainer >
          {allSkills.map(skill => (
            <SkillItemDiv key={skill.name}>
              <SkillLogo src={skill.logo} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItemDiv>
          ))}
        </SkillsContainer>
      </div>
    </section>
  );
};

export default Skills; 