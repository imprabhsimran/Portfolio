import React, { use } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImage from '../Assets/img/Prabh.JPG'
import { useState, useEffect } from 'react'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Mobile Developer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);
        setText(updatedText);
        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);   
            } else if(isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
        }
    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{'Hi, i am Prabh Simran Singh '}<span className='wrap'>({text})</span></h1>
                    <p>I am a passionate and ambitious developer with a creative mindset, eager to explore opportunities in both iOS and web development. With a Bachelor's degree in Computer Applications, I thrive on continuous learning and enjoy diving into new technologies and frameworks to expand my expertise. In iOS development, I've had the privilege of working on diverse projects using SwiftUI and various frameworks like REST APIs, MapKit, Firebase, Core Data, and Realm, which have honed my ability to craft seamless and dynamic mobile applications. Beyond iOS, I bring proficiency in web technologies, including HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, ExpressJS and SQL, enabling me to build responsive, user-friendly, and visually appealing web solutions. My dedication to innovation and adaptability drives me to deliver impactful digital experiences across platforms.</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImage} alt='Header Img' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner