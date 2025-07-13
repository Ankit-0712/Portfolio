import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiFacebook, url: 'https://www.facebook.com/ankit.pant.927980', color: '#1877f2' },
    { icon: FiInstagram, url: 'https://www.instagram.com/_ankiiiittttt?igsh=MWtmNXk4ZXplemg4cA==', color: '#e4405f' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/ankitpant7', color: '#0077b5' },
    { icon: FiGithub, url: 'https://github.com/Ankit-0712', color: '#333' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <motion.div
            className="footer-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="footer-logo">Ankit Pant</span>
            <span className="footer-title">Web Developer</span>
            <span className="footer-copyright">© {currentYear} All rights reserved.</span>
          </motion.div>

          <motion.div
            className="footer-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="footer-social-section">
              <h4 className="footer-social-title">Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    style={{ '--hover-color': social.color }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 