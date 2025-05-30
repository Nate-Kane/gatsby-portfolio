import { useStaticQuery, graphql } from "gatsby";
import React from "react";
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

const ImageThumbnail = styled(GatsbyImage)`
  cursor: pointer;
`

const Projects: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "Project"}}}) {
        nodes {
          frontmatter {
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
                  <ImageThumbnail
                    image={imageData}
                    alt={project.frontmatter.title}
                    style={{ width: 270, height: 130, objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ width: 270, height: 130, background: "#ccc", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    No Image
                  </div>
                )}
              </div>
            );
          })}
        </ProjectsGrid>
      </div>
    </section>
  );
};

export default Projects;
