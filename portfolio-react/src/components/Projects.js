import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiGlobe } from 'react-icons/fi';
import { SiNextdotjs, SiAngular, SiTailwindcss, SiFirebase, SiPython, SiFlask, SiAndroidstudio } from 'react-icons/si';
import mockAiImage from '../Screenshot (86).png';
import fitzoneImage from '../Screenshot (85).png';
import moviesImage from '../movies.jpeg';
import diseaseImage from '../disease.jpeg';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: 'Mock Ai',
      description: 'An Ai Powered Mock Interview Platform for Job Seekers.',
      image: mockAiImage,
      technologies: ['Next.js', 'Clerk Auth', 'Gemini API','Tailwind CSS','Drizzle ORM'],
      githubUrl: 'https://github.com/Ankit-0712/Mock.AI',
      liveUrl: null,
      category: 'AI Platform'
    },
    {
      id: 2,
      title: 'FitZone',
      description: 'A fitness tracking and workout planning app with personalized recommendations and progress tracking.',
      image: fitzoneImage,
      technologies: ['Angular', 'SCSS', 'Firebase'],
      githubUrl: 'https://github.com/Ankit-0712/fitZone',
      liveUrl: null,
      category: 'Health & Fitness'
    },
    {
      id: 3,
      title: 'Movies Recommendation App',
      description: 'An app that recommends movies based on user preferences and viewing history using ML algorithms.',
      image: moviesImage,
      technologies: ['Java', 'Python', 'Flask', 'TMDB API','Android Studio'],
      githubUrl: 'https://github.com/Ankit-0712/Movies_Recommendation',
      liveUrl: null,
      category: 'Recommendation System'
    },
    {
      id: 4,
      title: 'Disease Prediction System',
      description: 'A machine learning system for predicting diseases based on symptoms and patient data.',
      image: diseaseImage,
      technologies: ['Python', 'Streamlit', 'Flask'],
      githubUrl: 'https://github.com/Ankit-0712/Multiple-Disease-Prediction-System',
      liveUrl: null,
      category: 'Healthcare AI'
    }
  ];

  const techIconMap = {
    'Next.js': SiNextdotjs,
    'Angular': SiAngular,
    'Tailwind CSS': SiTailwindcss,
    'Firebase': SiFirebase,
    // Java doesn’t have a dedicated devicon in react-icons/si; fall back to Python icon style
    'Java': SiPython,
    'Python': SiPython,
    'Flask': SiFlask,
    'Android Studio': SiAndroidstudio
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of my recent work
          </p>
        </motion.div>

        {/* Horizontal slider for projects */}
        <div className="projects-slider">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub size={24} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-category">
                <FiCode size={16} />
                <span>{project.category}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {(() => {
                      const TechIcon = techIconMap[tech];
                      return TechIcon ? <TechIcon className="tech-tag-icon" /> : null;
                    })()}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn project-btn"
                >
                  <FiGithub size={18} />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn project-btn secondary"
                  >
                    <FiGlobe size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-card">
            <h3>Interested in working together?</h3>
            <p>Let's discuss your next project and bring your ideas to life.</p>
            <a href="#contact" className="btn cta-btn">
              Get In Touch
            </a>
          </div>
        </motion.div>
    </section>
  );
};

export default Projects; 