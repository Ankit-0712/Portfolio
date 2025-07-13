import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiArrowDown } from 'react-icons/fi';
import Typed from 'typed.js';
import ProfileImage from '../Profile.jpg';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { icon: FiFacebook, url: 'https://www.facebook.com/ankit.pant.927980', color: '#1877f2' },
    { icon: FiInstagram, url: 'https://www.instagram.com/_ankiiiittttt?igsh=MWtmNXk4ZXplemg4cA==', color: '#e4405f' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/ankitpant7', color: '#0077b5' },
    { icon: FiGithub, url: 'https://github.com/Ankit-0712', color: '#333' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-greeting"
            >
              Hello, It's Me
            </motion.h3>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-name"
            >
              Ankit Pant
            </motion.h1>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-title"
            >
              And I'm a <span ref={typedRef} className="typed-text"></span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hero-description"
            >
              I'm a passionate web developer with expertise in creating beautiful, functional, and user-friendly websites. I specialize in modern web technologies and love turning ideas into reality.
            </motion.p>
            
            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  style={{ '--hover-color': social.color }}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Link to="about" smooth={true} duration={500} className="btn hero-btn primary">
                More About Me
              </Link>
              <Link to="projects" smooth={true} duration={500} className="btn hero-btn secondary">
                View My Work
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="image-container">
              <img src={ProfileImage} alt="Ankit Pant" />
              <div className="image-glow"></div>
              <div className="image-border"></div>
            </div>
            
            <motion.div
              className="floating-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <div className="card-content">
                <h4>2+ Years</h4>
                <p>Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow">
          <FiArrowDown size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 