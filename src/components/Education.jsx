import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const educationData = [
    {
      title: "Post-Degree Diploma in Web and Mobile App Development",
      institution: "Langara College, Vancouver, Canada",
      year: "2024 – 2025",
      description:
        "Specialized in full-stack web and mobile app development with hands-on experience in React, Node.js, SwiftUI, and Firebase. Developed impactful projects like Kisan and Art Asta.",
    },
    {
      title: "Bachelor of Computer Applications",
      institution: "Lovely Professional University, Punjab, India",
      year: "2019 – 2022",
      description:
        "Gained strong fundamentals in software development, data structures, and programming. Explored the basics of web and app technologies through academic projects and hackathons.",
    },
  ];
  

const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <h2 className="text-center mb-5">Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <h6>{item.institution}</h6>
                <span className="year">{item.year}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
