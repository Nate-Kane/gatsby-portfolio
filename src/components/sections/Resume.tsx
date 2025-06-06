import React from "react";
import styled from "@emotion/styled";
import PersonalInfo from "../resume/PersonalInfo";
import Skills from "../resume/Skills";
import Experience from "../resume/Experience";
import Education from "../resume/Education";
import Additional from "../resume/Additional";
import '../resume/Resume.css'

const Resume: React.FC = () => {

  const Resume = styled.div`
    min-height: fit-content;
    width: 816px;
    background: white;
    margin: 0 auto;
    padding: 60px 60px;
  `

  return (
    <Resume className="resume">
      <PersonalInfo></PersonalInfo>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <Additional></Additional>
    </Resume>
  );
};

export default Resume; 