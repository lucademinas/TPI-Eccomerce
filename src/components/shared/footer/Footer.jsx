import React from 'react';
import { Container } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" >
            <FaYoutube size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p>Seguinos en nuestras redes</p>
      </Container>
    </footer>
  );
};

export default Footer;