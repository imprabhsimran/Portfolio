import React, { use } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImage from '../Assets/img/PrabhSuit.jpg'
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
                    <p> I’m a curious problem solver and tech enthusiast who loves turning ideas into real, functional apps. With a strong foundation in computer applications, I’m always eager to learn and create.</p>
                </Col>
                <Col xs={12} md={6} xl={5} className="d-flex justify-content-center align-items-center">
  <div style={{ width: "100%", maxWidth: "600px", aspectRatio: "1 / 1", overflow: "hidden" }}>
  <img
  src={headerImage}
  alt="Header Img"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "100px",   // Adjust as needed
    borderTopRightRadius: "100px",
    borderBottomLeftRadius: "100px",
    borderBottomRightRadius: "100px" // Adjust as needed
  }}
/>

  </div>
</Col>

            </Row>
        </Container>
    </section>
  )
}

export default Banner