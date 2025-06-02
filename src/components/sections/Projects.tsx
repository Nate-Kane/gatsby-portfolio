import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import styled from "@emotion/styled";

interface ProjectNode {
  frontmatter: {
    title: string;
    slug: string;
    description: string;
    projectUrl: string;
    technologies: string[];
    featuredImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 910px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 575px;
  }
  @media (max-width: 600px) {
    max-width: 270px;
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
  border-radius: 20px;
  opacity: 0.85;
  transition: transform 0.2s, filter 0.2s, opacity 0.2s;

  &:hover {
    opacity: 1;
    transform: translateY(-4px);
  }
`

const ImageThumbnail = styled(GatsbyImage)`
  cursor: pointer;
  border-radius: 20px;
  width: 270px;
  height: 130px;
  objectFit: cover;
`

const ImageFallback = styled.div`
  width: 270px;
  height: 130px;
  background: "#ccc";
  display: flex;
  alignItems: center;
  justifyContent: center;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  // background: rgba(21, 52, 136, 0.15);
  background: hsla(215 41% 15.5% / 0.58);
  backdrop-filter: blur(10px);
  z-index: 999;
`;

const ModalInnerOverlay = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCloseIcon = styled.div`
  width: 48px;
  height: 32px;
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 1001;
  @media (max-width: 768px) {
    top: 18px;
    right: 18px;
    width: 36px;
    height: 24px;
  }
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: var(--primary-color);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    @media (max-width: 768px) {
      height: 3px;
    }
  }
  span:nth-of-type(1) {
    top: 18px;
    transform: rotate(135deg);
    @media (max-width: 768px) {
      top: 14px;
    }
  }
  span:nth-of-type(2) {
    top: 18px;
    transform: rotate(-135deg);
    @media (max-width: 768px) {
      top: 14px;
    }
  }
`;

const ModalContent = styled.div`
  // background: hsla(215 41% 15.5% / 0.58);
  border-radius: 24px;
  max-width: 1000px;
  width: 90vw;
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ModalImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 16px;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin-top: 1px;
`;

const TechItem = styled.li`
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 4px 12px;
  font-size: var(--font-size-sm);
  color: var(--primary-color);
`;

const ModalContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  @media (max-width: 700px) {
    max-width: 98vw;
  }
`;

const TopRow = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const TopLeftCol = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const TopRightCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 120px;
  @media (max-width: 700px) {
    align-items: left;
    min-width: 0;
    margin-left: 1px;
  }
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  gap: 10px;
  margin-left: 2px;
  margin-top: 10px;
`;

const ModalTitle = styled.h2`
  margin-bottom: 0;
  text-align: center;
  font-size: var(--font-size-lg);
  font-weight: 700;
  letter-spacing: 1px;
`;

const ProjectTitleContainer = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
  }
`;

const ProjectLink = styled.a`
  color: var(--primary-color);
  background: rgba(21, 52, 136, 0.25);
  border-radius: 8px;
  padding: 6px 14px;
  text-decoration: none;
  font-weight: 700;
  font-size: var(--font-size-sm);
  transition: background 0.2s;
  margin-left: 10px;
  &:hover {
    background: rgba(21, 52, 136, 0.45);
  }
  @media (max-width: 700px) {
    margin-left: -3px;
  }
`;

const ProjectDescription = styled.p`
  font-size: var(--font-size-sm);
`

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectNode | null>(null);
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "Project"}}}
        sort: {frontmatter: {order: ASC}}
      ) {
        nodes {
          frontmatter {
            order
            title
            slug
            description
            projectUrl
            technologies
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes as ProjectNode[];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <ProjectsGrid>
          {projects.map(project => {
            const imageData = getImage(project.frontmatter.featuredImage);
            return (
              <div key={project.frontmatter.slug}>
                {imageData ? (
                  <ImageContainer
                    onClick={() => {
                      console.log(project);
                      setSelectedProject(project);
                    }}
                  >
                    <ImageThumbnail
                      image={imageData}
                      alt={project.frontmatter.title}
                    />
                  </ImageContainer>
                ) : (
                  <ImageFallback>
                    No Image
                  </ImageFallback>
                )}
              </div>
            );
          })}
        </ProjectsGrid>
        {selectedProject && (
          <ModalOverlay onClick={() => setSelectedProject(null)}>
            <ModalInnerOverlay>
              <ModalCloseIcon onClick={() => setSelectedProject(null)}>
                <span></span>
                <span></span>
              </ModalCloseIcon>
              <ModalContent onClick={e => e.stopPropagation()}>
                <ModalContentGrid>
                  <TopRow>
                    <TopLeftCol>
                      {getImage(selectedProject.frontmatter.featuredImage) && (
                        <ModalImage
                          image={getImage(selectedProject.frontmatter.featuredImage)!}
                          alt={selectedProject.frontmatter.title}
                        />
                      )}
                    </TopLeftCol>
                    <TopRightCol>
                      <TechList>
                        {selectedProject.frontmatter.technologies.map(tech => (
                          <TechItem key={tech}>{tech}</TechItem>
                        ))}
                      </TechList>
                    </TopRightCol>
                  </TopRow>
                  <BottomRow>
                    <ProjectTitleContainer>
                      <ModalTitle>{selectedProject.frontmatter.title}</ModalTitle>
                      {selectedProject.frontmatter.slug !== "nk-portfolio" && (
                        <ProjectLink
                          href={selectedProject.frontmatter.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Project
                        </ProjectLink>
                      )}
                    </ProjectTitleContainer>
                    <ProjectDescription>{selectedProject.frontmatter.description}</ProjectDescription>
                  </BottomRow>
                </ModalContentGrid>
              </ModalContent>
            </ModalInnerOverlay>
          </ModalOverlay>
        )}
      </div>
    </section>
  );
};

export default Projects;
