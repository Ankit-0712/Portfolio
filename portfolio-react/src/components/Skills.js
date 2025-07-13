import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiGlobe, FiServer
} from 'react-icons/fi';
import { SiHtml5, SiCss3, SiNextdotjs, SiAngular, SiTailwindcss, SiTypescript, SiMysql, SiPostgresql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Debug logging for mobile
  React.useEffect(() => {
    console.log('Skills component mounted');
    console.log('InView status:', inView);
  }, [inView]);

  // Ensure component renders even if animations fail
  const [hasError, setHasError] = React.useState(false);
  
  React.useEffect(() => {
    // Fallback if component doesn't render within 3 seconds
    const timer = setTimeout(() => {
      if (!inView) {
        setHasError(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [inView]);

  const skills = [
    {
      icon: SiHtml5,
      name: 'HTML',
      description: 'Experienced in creating structured and semantic HTML documents.',
      color: '#e34c26',
      noProgress: true
    },
    {
      icon: SiCss3,
      name: 'CSS',
      description: 'Proficient in CSS, including modern layouts like Flexbox and Grid.',
      color: '#2196f3',
      noProgress: true
    },
    {
      icon: FiCode,
      name: 'JavaScript',
      description: 'Skilled in JavaScript for creating dynamic and interactive web pages.',
      color: '#f7dc6f',
      noProgress: true
    },
    {
      icon: FiGlobe,
      name: 'React',
      description: 'Familiar in building web pages using React and related technologies.',
      color: '#61dbfb',
      noProgress: true
    },
    {
      icon: FiServer,
      name: 'Java',
      description: 'Experienced in developing robust and scalable applications using Java.',
      color: '#b07219',
      noProgress: true
    },
    {
      icon: FiDatabase,
      name: 'Python',
      description: 'Skilled in Python for data analysis, machine learning, and automation.',
      color: '#3572a5',
      noProgress: true
    },
  
    {
      icon: SiNextdotjs,
      name: 'Next.js',
      description: 'Building fast, SEO-friendly React apps with Next.js.',
      color: '#000',
      noProgress: true
    },
    {
      icon: SiAngular,
      name: 'Angular',
      description: 'Developing scalable web apps with Angular.',
      color: '#dd0031',
      noProgress: true
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwind CSS',
      description: 'Rapid UI development with Tailwind CSS utility classes.',
      color: '#38bdf8',
      noProgress: true
    },
    {
      icon: SiTypescript,
      name: 'TypeScript',
      description: 'Type-safe JavaScript development with TypeScript.',
      color: '#3178c6',
      noProgress: true
    },
    {
      icon: SiMysql,
      name: 'MySQL',
      description: 'Experience with MySQL relational databases.',
      color: '#00758f',
      noProgress: true
    },
    {
      icon: SiPostgresql,
      name: 'PostgreSQL',
      description: 'Experience with PostgreSQL relational databases.',
      color: '#336791',
      noProgress: true
    }
  ];

  // Fallback render method for mobile
  const renderFallbackSkills = () => (
    <div className="skills-grid">
      {skills.map((skill, index) => {
        const SkillIcon = skill.icon;
        return (
          <div
            key={skill.name}
            className="skill-card"
            style={{ 
              minHeight: '200px',
              opacity: 1,
              transform: 'translateY(0)'
            }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              <SkillIcon size={40} />
            </div>
            
            <h3 className="skill-name">{skill.name}</h3>
            
            <p className="skill-description">{skill.description}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with
          </p>
        </motion.div>

        {hasError ? (
          renderFallbackSkills()
        ) : (
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{ minHeight: '200px' }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <SkillIcon size={40} />
                  </div>
                  
                  <h3 className="skill-name">{skill.name}</h3>
                  
                  <p className="skill-description">{skill.description}</p>
                  
                  {!skill.noProgress && (
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: '0%' }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                      <span className="progress-text">{skill.level}%</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills; 