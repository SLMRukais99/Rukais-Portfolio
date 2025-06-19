import React from "react";
import portfolioData from "../data/portfolioData";

const About = () => {
  const about = portfolioData.personal; // or portfolioData.education, etc.
  return (
    <section>
      <h2>About Me</h2>
      <p>{about.description}</p>
      <p>{about.university}</p>
    </section>
  );
};

export default About;