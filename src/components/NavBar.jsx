import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../Assets/img/PS.png'
import navIcon1 from '../Assets/img/nav-icon1.svg'
import navIcon3 from '../Assets/img/nav-icon3.svg'
import resume from '../Assets/resume/Resume-Prabh.pdf'



const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    })

    const onUpadateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" style={{ width: '150px', height: 'auto' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/imprabhsimran/'><img src={navIcon1} alt=''></img></a>
                            <a href='https://www.instagram.com/imprabhsimran/'><img src={navIcon3} alt=''></img></a>
                        </div>
                        <button
                            className="vvd"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = resume;
                                link.download = 'Prabh-Resume.pdf'; 
                                link.click(); 
                            }}
                        >
                            <span>Resume</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar