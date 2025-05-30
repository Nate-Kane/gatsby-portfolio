import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { IGatsbyImageData } from "gatsby-plugin-image";

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
        <div>
          {projects.map(project => {
            const imageData = getImage(project.frontmatter.featuredImage);
            return (
              <div key={project.frontmatter.slug}>
                {imageData ? (
                  <GatsbyImage
                    image={imageData}
                    alt={project.frontmatter.title}
                    style={{ width: 200, height: 200, objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ width: 200, height: 200, background: "#ccc", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    No Image
                  </div>
                )}
                {/* <div>{project.frontmatter.title}</div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
