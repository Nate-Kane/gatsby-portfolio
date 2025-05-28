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

  @media (max-width:450px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;

const SkillItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillLogo = styled.img`
  width: 60px;
  height: 60px;
  filter: grayscale(0.2) brightness(1.2) opacity(0.7);

  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
  }
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
              {/* <div style={{ fontSize: '1rem', fontWeight: 500 }}>{skill.name}</div> */}
            </SkillItemDiv>
          ))}
        </SkillsContainer>
      </div>
    </section>
  );
};

export default Skills; 