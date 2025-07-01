import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSwift } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 300 },
      items: 1
    }
  };
  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>My Skills</h2>
              <p>I specialize in iOS development using Swift and SwiftUI, focusing on building clean, intuitive, and high-performance native apps. I integrate technologies like Firebase, Core Data, RESTful APIs, and MapKit to deliver dynamic, feature-rich experiences with responsive UI design and scalable, maintainable code.<br></br> At the same time, I have a strong command of modern web technologies such as HTML, CSS, JavaScript, React, and Node.js. I build responsive, user-friendly web interfaces supported by solid backend infrastructure using Express and MongoDB. With a foundation in C++, Java, and SQL, I approach problems logically and create full-stack solutions that are both visually compelling and technically robust.<br></br>This combined expertise allows me to craft seamless, high-quality experiences across both mobile and web platforms..</p>



              <div className='skill-name'> 


                <div className='item'>
                  <h1><GrSwift className="icon-large"/></h1>  
                  <h5>Swift</h5>
                </div>

                <div className='item'>
                  <h1><FaSwift className="icon-large"/></h1>
                  <h5>SwiftUI</h5>
                </div>

                <div className='item'>
                  <h1><FaHtml5 className="icon-large"/></h1>
                  <h5>HTML</h5>
                </div>

                <div className='item'>
                  <h1><FaCss3Alt className="icon-large"/></h1>
                  <h5>CSS</h5>
                </div>

                <div className='item'>
                  <h1><IoLogoJavascript className="icon-large"/></h1>
                  <h5>JavaScript</h5>
                </div>

                <div className='item'>
                  <h1><FaReact className="icon-large"/></h1>
                  <h5>ReactJS</h5>
                </div>

                <div className='item'>
                  <h1><FaNode className="icon-large"/></h1>
                  <h5>NodeJS</h5>
                </div>

                <div className='item'>
                  <h1><IoLogoFirebase className="icon-large"/></h1>
                  <h5>Firebase</h5>
                </div>

                <div className='item'>
                  <h1><SiMongodb className="icon-large"/></h1>
                  <h5>MongoDB</h5>
                </div>

                <div className='item'>
                  <h1><SiMysql className="icon-large"/></h1>
                  <h5>MySQL</h5>
                </div>

                <div className='item'>
                  <h1><TbBrandReactNative className="icon-large"/></h1>
                  <h5>React Native</h5>
                </div>

                <div className='item'>
                  <h1><FaJava className="icon-large"/></h1>
                  <h5>Java</h5>
                </div>

                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills