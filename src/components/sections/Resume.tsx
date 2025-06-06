import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import PersonalInfo from "../resume/PersonalInfo";
import Skills from "../resume/Skills";
import Experience from "../resume/Experience";
import Education from "../resume/Education";
import Additional from "../resume/Additional";
import '../resume/Resume.css'

const ResumeContainer = styled.div`
  // min-height: fit-content;
  // width: 816px;
  // background: white;
  // margin: 0 auto;
  padding: 10px;
`;

const Resume = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <ResumeContainer className="resume" ref={ref}>
      <PersonalInfo />
      <Skills />
      <Experience />
      <Education />
      <Additional />
    </ResumeContainer>
  );
});

export default Resume; 