import React from "react";
import styled from "@emotion/styled";

const Experience: React.FC = () => {

  const ExperienceSection = styled.div``

  const SectionTitle = styled.h3``;

  const Position = styled.div``

  const PositionInfo = styled.div``

  const Responsabilities = styled.div``

  const ExperienceGrid = styled.div`
    display: grid;
    grid-template-columns: 1.8fr 3fr;
    align-items: start;
    gap: 2.5rem 3rem;
  `;

  return (
    <ExperienceSection>
      <SectionTitle>Experience</SectionTitle>
      <ExperienceGrid>
        <Position>
          <PositionInfo>
            <h2>ShipInsure</h2> // company name
            <h4>Software Engineer,</h4> // position name
            <h5>Lehi, Utah (Remote) <br/> 2024 - Present</h5> // timeline
          </PositionInfo>
          <Responsabilities>
            <ul>
              <li>Responsability 1</li>
              <li>Responsability 2</li>
              <li>Responsability 3</li>
            </ul>
          </Responsabilities>
        </Position>
      </ExperienceGrid>
    </ExperienceSection>
  );
};

export default Experience; 