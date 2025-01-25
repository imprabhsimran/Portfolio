import React from 'react'
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import contactImage from '../Assets/img/contact-img.svg'

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
        }
        const [formDetails, setFormDetails] = useState(formInitialDetails);
        const [buttonText, setButtonText] = useState('Send');
        const [status, setStatus] = useState({});

        const onFormUpdate = (category, value) => {
            setFormDetails({
                ...formDetails,
                [category]: value
                })
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            setButtonText("Sending...");
            let response = await fetch("http://localhost:5000/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(formDetails),
            });
            setButtonText("Send");
            let result = await response.json();
            setFormDetails(formInitialDetails);
            if (result.code == 200) {
              setStatus({ succes: true, message: 'Message sent successfully'});
            } else {
              setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
            }
          };

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImage} alt="contact image" />
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>   
                    <form onSubmit={handleSubmit}> 
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.firstName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.firstName} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.firstName} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                            </Col>

                            <Col>
                            <textarea value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                            </Col>

                            {
                                status.message &&
                                <Col>
                                <p className={status.sucess === false ? "danger" : "sucsess"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact