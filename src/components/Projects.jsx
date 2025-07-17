import React from 'react'
import projImg1 from '../Assets/img/K.jpeg'
import projImg2 from '../Assets/img/A.jpeg'
import projImg3 from '../Assets/img/genie.png'
import { Container, Row, Col, TabContainer, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../Assets/img/color-sharp2.png'
import TrackVisibility from 'react-on-screen';


const Projects = () => {
  const projects = [
    {
      title: "Kisan",
      description: "Kisan means farmer in Hindi. It is built to empower Indian farmers by providing tailored crop recommendations, real-time market insights, weather forecasts, and resources for sustainable farming practices. To enhance accessibility, the platform features multilingual support, ensuring usability for farmers across different regions. Additionally, Kisan incorporates an AI-powered chatbot for instant assistance, offering a holistic solution for informed agricultural decision-making.",
      imgUrl: projImg1,
      websiteUrl: "https://kisanai.ca/landing",
    },
    {
      title: "Art Asta",
      description: "Led the development of a web application designed to connect artists and art enthusiasts through a dynamic auction platform. The application enabled artists to showcase their portfolios and auction their artwork, fostering engagement through a competitive bidding process. Additionally, implemented features allowing art enthusiasts to post art on demand requests with image references, streamlining communication for custom projects and pricing discussions.",
      imgUrl: projImg2,
      websiteUrl: "https://artasta.netlify.app/",
    },
    {
      title: "Trade Genie",
      description: "Led the development of Trade Genie, a iOS application that empowers users to access real-time stock prices, view the latest financial news, and receive intelligent investment suggestions powered by Gemini AI. The platform simplifies market analysis by integrating live data feeds, enabling users to make informed decisions on where to invest. Designed an intuitive user interface for seamless stock exploration and incorporated AI-driven recommendations to enhance user confidence in market trends.",
      imgUrl: projImg3,
      websiteUrl: "https://github.com/imprabhsimran/Trade-Genie",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These are some of the web and mobile projects I created.</p>
                  <Row className="g-4">
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

export default Projects;
