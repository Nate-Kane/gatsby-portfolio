import { useStaticQuery, graphql } from "gatsby";
import React from "react";

interface ProjectNode {
  frontmatter: {
    title: string;
    slug: string;
    description: string;
    projectUrl: string;
    technologies: string[];
    imageUrl: string;
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
            imageUrl
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
          {projects.map(project => (
            <div key={project.frontmatter.slug}>{project.frontmatter.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 