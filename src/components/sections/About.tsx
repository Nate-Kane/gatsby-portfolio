import React, { useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Resume from "../sections/Resume";
// @ts-ignore
import html2pdf from "html2pdf.js";

const AboutSection = styled.section`
  padding: 80px 0;
`;

const AboutContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 48px;
  @media (max-width: 970px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Portrait = styled(GatsbyImage)`
  border-radius: 20px;
  width: 430px;
  height: 600px;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  @media (max-width: 700px) {
    width: 400px;
    height: 410px;
  }
  @media (max-width: 450px) {
    width: 350px;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  height: 600px;
  max-width: 430px;
  min-width: 430px;
  font-size: var(--font-size-sm);
  color: var(--primary-color);
  line-height: 1.7;
  background: hsla(215 41% 15.5% / 0.58);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 23px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  text-transform: initial;
  @media (max-width: 700px) {
    font-size: var(--font-size-md);
    max-width: 400px;
    min-width: 400px;
    height: fit-content;
  }
  @media (max-width: 450px) {
    max-width: 350px;
    min-width: 350px;
  }
`;

const AboutText = styled.div``

const ViewResume = styled.button`
  color: var(--primary-color);
  background: rgba(0,0,0,0.3);
  border-radius: 20px;
  border: 1px solid var(--primary-color);
  padding: 8px 20px;
  text-decoration: none;
  font-weight: 700;
  font-size: var(--font-size-xs);
  transition: background 0.2s;
  width: fit-content;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  &:hover {
    background: rgba(21, 52, 136, 0.45);
  }
  @media (max-width: 970px) {
    margin-top: 18px;
  }
`;

const HiddenDiv = styled.div`
  position: absolute;
  left: -9999px;
  top: 0;
  width: 0;
  height: 0;
  overflow: hidden;
`;

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "nk_portrait.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 430, height: 600, placeholder: BLURRED)
        }
      }
    }
  `);

  const imageData = getImage(data.portrait);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleViewResume = async () => {
    if (resumeRef.current) {
      const opt = {
        margin: 0.4,
        filename: 'Nate-Kane-Resume.pdf',
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      const worker = html2pdf().from(resumeRef.current).set(opt);
      const pdfBlob: Blob = await worker.outputPdf('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
      // Optionally revoke the URL after a delay
      setTimeout(() => URL.revokeObjectURL(pdfUrl), 10000);
    }
  };

  return (
    <AboutSection className="about" id="about">
      <div className="container">
        <h2>About Nate</h2>
        <AboutContainer>
          {imageData && (
            <Portrait image={imageData} alt="Nate Kane portrait" />
          )}
          <AboutContent>
            <AboutText>
                Hey, I'm Nate! 
                <br/><br/>
                
                I started writing code out of a love for creating things and solving problems. I get a real thrill out of solving a tough bug or bringing a new feature to life right before my eyes.

                <br/><br/>
                I live in the (mostly) sunny city of Provo, Utah with my wife, Hayley.
                <br/><br/>

                My favorite hobby is playing guitar but I also love spending time outdoors—whether that's rock climbing, paddle boarding, or exploring somewhere new.
                <br/><br/>
                
                Led by consistent and dedicated work, I aim to bring that creativity and curiosity into the problems I solve at work.
            </AboutText>
            <ViewResume
              onClick={handleViewResume}
              as="button"
              type="button"
            >
              Learn about my professional experience
            </ViewResume>
            <HiddenDiv>
              <Resume ref={resumeRef} />
            </HiddenDiv>
          </AboutContent>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default About; 
