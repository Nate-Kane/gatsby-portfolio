import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          jobTitle
          developerStartDate
          description
        }
      }
    }
  `);

  const { author, jobTitle, developerStartDate } = data.site.siteMetadata;

  // Calculate years and days since developerStartDate
  const getYearsAndDays = (startDateStr: string) => {
    const startDate = new Date(startDateStr);
    const now = new Date();
    const diffMs = now.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365.25);
    const days = diffDays - Math.floor(years * 365.25);
    return { years, days };
  };

  const { years, days } = getYearsAndDays(developerStartDate);

  // Timer for minutes and seconds
  const getInitialTime = () => {
    const now = new Date();
    return {
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  };

  const [timer, setTimer] = useState(getInitialTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        let { minutes, seconds } = prev;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes >= 60) {
          minutes = 0;
        }
        return { minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pad minutes/seconds with leading zeros if needed
  const pad = (n: number) => n.toString().padStart(2, "0");

  const JobTitleDiv = styled.div`
    margin: -15px auto 0 auto;
    width: fit-content;
    font-size: var(--font-size-2xl);
  `;

  const TimerDiv = styled.div`
    margin: 20px auto 0 auto;
    font-size: var(--font-size-lg);
    font-family: var(--font-family-main);
    letter-spacing: 1px;
    background: rgba(0,0,0,0.3);
    border-radius: 8px;
    padding: 8px 20px;
    border: 1px solid var(--primary-color);
    border-radius: 20px;
    width: fit-content;
  `;

  return (
    <section className="hero">
      <div className="container">
        <h1>{author}</h1>
        <JobTitleDiv>{jobTitle} of</JobTitleDiv>
        <TimerDiv>
          {years} years {days} days {pad(timer.minutes)} minutes {pad(timer.seconds)} seconds
        </TimerDiv>
      </div>
    </section>
  );
};

export default Hero; 