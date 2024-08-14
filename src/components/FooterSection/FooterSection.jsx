import React from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <Box className="footer-content">
        <Box className="footer-contact">
          <Typography variant="h6" className="footer-title">
            Newlin
          </Typography>
          <Typography variant="body2">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Sector 17 SR Homes, Sukhrali Main Road
          </Typography>
          <Typography variant="body2">
            <FontAwesomeIcon icon={faPhoneAlt} /> Call: 9315814283
          </Typography>
          <Typography variant="body2">
            <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:newlin199@gmail.com">newlin199@gmail.com</a>
          </Typography>
        </Box>
        <Box className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=100093532550214" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/newlin_2023/" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Box>
      </Box>
      <Box className="footer-bottom">
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Newlin. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default FooterSection;
