import React from 'react'
import projImg1 from '../Assets/img/K.jpeg'
import projImg2 from '../Assets/img/A.jpeg'
import projImg3 from '../Assets/img/project-img3.png'
import { Container, Row, Col, TabContainer, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../Assets/img/color-sharp2.png'
import TrackVisibility from 'react-on-screen';


const Projects = () => {
  const projects = [
    {
      title: "Kisan",
      description: "Kisan is built to empower Indian farmers by providing tailored crop recommendations, real-time market insights, weather forecasts, and resources for sustainable farming practices. To enhance accessibility, the platform features multilingual support, ensuring usability for farmers across different regions. Additionally, Kisan incorporates an AI-powered chatbot for instant assistance, offering a holistic solution for informed agricultural decision-making.",
      imgUrl: projImg1,
      websiteUrl: "https://kisanai.ca/landing",
    },
    {
      title: "Art Asta",
      description: "Led the development of a web application designed to connect artists and art enthusiasts through a dynamic auction platform. The application enabled artists to showcase their portfolios and auction their artwork, fostering engagement through a competitive bidding process. Additionally, implemented features allowing art enthusiasts to post art on demand requests with image references, streamlining communication for custom projects and pricing discussions.",
      imgUrl: projImg2,
      websiteUrl: "https://artasta.netlify.app/",
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These are some of the web and mobile projects i created.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">iOS Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Android Applications</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="g-4"> {/* Add a gap between columns */}
                          {
                            projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>iOS Apps</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Android Apps</p>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects