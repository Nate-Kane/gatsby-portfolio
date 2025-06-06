import React from "react";
import styled from "@emotion/styled";

const PersonalInfo: React.FC = () => {

  const PersonalInfo = styled.div`
  
  `

  return (
    <PersonalInfo className="resume-section">
        <h1 className="name">Nate Kane</h1>
        <h3>Software Engineer</h3>
        <h4>PROVO, UTAH &nbsp;//&nbsp; 801-898-9109 &nbsp;//&nbsp; NDKANE3@GMAIL.COM</h4>
    </PersonalInfo>
  );
};

export default PersonalInfo; 