import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

interface Category {
  label: string;
  items: string[];
}

const SectionTitle = styled.h3`
`;

const AdditionalSection = styled.div`
`;

const AdditionalGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 3fr;
  align-items: start;
  gap: 2.5rem 3rem;
`;

const CategoryLabel = styled.h4`
`;

const CategoryItems = styled.div`
`;

const Additional: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AdditionalQuery {
      markdownRemark(fileAbsolutePath: { regex: "/resume\/additional.md$/" }) {
        frontmatter {
          categories {
            label
            items
          }
        }
      }
    }
  `);

  const categories: Category[] = data?.markdownRemark?.frontmatter?.categories || [];

  return (
    <AdditionalSection className="resume-section">
      <SectionTitle>ADDITIONAL SKILLS AND INTERESTS</SectionTitle>
      <AdditionalGrid>
        {categories.map((cat, idx) => [
          <CategoryLabel key={`label-${idx}`}>{cat.label}</CategoryLabel>,
          <CategoryItems key={`items-${idx}`}>
            <ul>
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CategoryItems>
        ])}
      </AdditionalGrid>
    </AdditionalSection>
  );
};

export default Additional; 