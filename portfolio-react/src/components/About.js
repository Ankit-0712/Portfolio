import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiUser, FiTarget, FiZap } from 'react-icons/fi';
import Profile2Image from '../Profile2.jpg';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { icon: FiUser, number: '2+', label: 'Years Experience' },
    { icon: FiZap, number: 'Strong', label: 'Problem Solving Skills' },
    { icon: FiTarget, number: '100%', label: 'Client Satisfaction' }
  ];

  const highlights = [
    'Clean, responsive UI that works beautifully on mobile and desktop.',
    'Building full-stack apps with modern React, Next.js, Angular, and Java backends.',
    'API design, integration, and data modelling that keep projects maintainable.',
    'Strong focus on performance, readability, and long-term code quality.'
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me better
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-description">
              <p>
                Hi there! I'm <strong>Ankit Pant</strong>, a passionate web developer dedicated to creating beautiful and functional websites. With a keen eye for design and a knack for problem-solving, I strive to deliver exceptional digital experiences that leave a lasting impression.
              </p>
              <p>
                My journey in web development began with a curiosity to explore the limitless possibilities of the internet. Over time, I've honed my skills in both frontend and backend development, mastering technologies such as HTML, CSS, JavaScript, React, NextJs, Angular, Tailwind CSS, MySQL, Firebase, and more.
              </p>
              <p>
                I'm excited about the opportunity to leverage my skills and expertise to contribute to innovative projects and make a meaningful impact in the world of web development.
              </p>

              <motion.div
                className="about-highlights-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="about-highlights-title">What I&apos;m good at</h3>
                <ul className="about-highlights">
                  {highlights.map((item) => (
                    <li key={item} className="about-highlight-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="stat-icon">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="about-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="Ankit_Pant_Resume.pdf"
                download
                className="btn download-btn"
              >
                <FiDownload size={20} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <img src={Profile2Image} alt="Ankit Pant" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>Ankit Pant</h3>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 