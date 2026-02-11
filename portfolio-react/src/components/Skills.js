import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiGlobe, FiServer
} from 'react-icons/fi';
import { 
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiSpringboot,
  SiPostman,
  SiHibernate,
  SiFirebase,
  SiJasmine,
  SiMocha,
  SiApachemaven,
  SiGradle,
  SiGit,
  SiSass,
  SiMongodb
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  const skillCategories = [
    {
      key: 'frontend',
      title: 'Frontend',
      icon: FiGlobe,
      skills: [
        {
          icon: SiHtml5,
          name: 'HTML',
          description: 'Semantic, accessible markup for modern, SEO-friendly pages.',
          color: '#e34c26'
        },
        {
          icon: SiCss3,
          name: 'CSS',
          description: 'Responsive layouts with Flexbox, Grid, and modern CSS features.',
          color: '#2196f3'
        },
        {
          icon: FiCode,
          name: 'JavaScript',
          description: 'Interactive UIs, API calls, and state management in the browser.',
          color: '#f7dc6f'
        },
        {
          icon: FiGlobe,
          name: 'React',
          description: 'Component-based SPAs, hooks, and performance-conscious UI patterns.',
          color: '#61dbfb'
        },
        {
          icon: SiNextdotjs,
          name: 'Next.js',
          description: 'SEO-friendly React apps with SSR/SSG and API routes.',
          color: '#000'
        },
        {
          icon: SiAngular,
          name: 'Angular',
          description: 'Scalable frontends using modules, components, and RxJS.',
          color: '#dd0031'
        },
        {
          icon: SiTailwindcss,
          name: 'Tailwind CSS',
          description: 'Fast UI building with utility-first CSS and design systems.',
          color: '#38bdf8'
        },
        {
          icon: SiTypescript,
          name: 'TypeScript',
          description: 'Type-safe React/JS codebases with better DX and fewer bugs.',
          color: '#3178c6'
        },
        {
          icon: SiSass,
          name: 'SCSS / SASS',
          description: 'Modular, maintainable styles with variables, mixins, and partials.',
          color: '#cc6699'
        }
      ]
    },
    {
      key: 'backend',
      title: 'Backend & Databases',
      icon: FiServer,
      skills: [
        {
          icon: FiServer,
          name: 'Java',
          description: 'Robust backend services and business logic with Java.',
          color: '#b07219'
        },
        {
          icon: SiSpring,
          name: 'Spring',
          description: 'Enterprise-grade Java apps with Spring Core, DI, and MVC.',
          color: '#6db33f'
        },
        {
          icon: SiSpringboot,
          name: 'Spring Boot',
          description: 'Production-ready REST APIs and microservices with Spring Boot.',
          color: '#6db33f'
        },
        {
          icon: SiHibernate,
          name: 'Hibernate',
          description: 'ORM mapping, relations, and efficient data access.',
          color: '#59666c'
        },
        {
          icon: FiDatabase,
          name: 'JPA',
          description: 'Clean repository patterns and entity models using JPA.',
          color: '#7c3aed'
        },
        {
          icon: FiDatabase,
          name: 'Python',
          description: 'APIs, scripting, and ML/DS workflows in Python.',
          color: '#3572a5'
        },
        {
          icon: SiMysql,
          name: 'MySQL',
          description: 'Relational schema design, queries, and optimization.',
          color: '#00758f'
        },
        {
          icon: SiPostgresql,
          name: 'PostgreSQL',
          description: 'Advanced SQL features and reliable data storage.',
          color: '#336791'
        },
        {
          icon: SiMongodb,
          name: 'MongoDB',
          description: 'Document databases for flexible, schema-less data.',
          color: '#10aa50'
        },
        {
          icon: SiFirebase,
          name: 'Firebase',
          description: 'Auth, Firestore, and hosting for full-stack experiences.',
          color: '#ffca28'
        }
      ]
    },
    {
      key: 'tools',
      title: 'DevOps & Tools',
      icon: FiDatabase,
      skills: [
        {
          icon: SiGit,
          name: 'Git',
          description: 'Version control, branching strategies, and collaboration.',
          color: '#f05032'
        },
        {
          icon: SiApachemaven,
          name: 'Maven',
          description: 'Java dependency management and repeatable builds.',
          color: '#c71a36'
        },
        {
          icon: SiGradle,
          name: 'Gradle',
          description: 'Flexible build automation for Java and Android.',
          color: '#02303a'
        },
        {
          icon: SiPostman,
          name: 'Postman',
          description: 'Designing, testing, and automating REST APIs.',
          color: '#ff6c37'
        }
      ]
    },
    {
      key: 'testing',
      title: 'Testing',
      icon: FiCode,
      skills: [
        {
          icon: SiJasmine,
          name: 'Jasmine',
          description: 'Unit testing and specs for Angular/JavaScript apps.',
          color: '#8a4182'
        },
        {
          icon: SiMocha,
          name: 'Mocha',
          description: 'Asynchronous JS testing with Mocha-based setups.',
          color: '#8d6748'
        }
      ]
    }
  ];

  const flatSkills = skillCategories.flatMap((category) => category.skills);

  // Fallback render method for mobile
  const renderFallbackSkills = () => (
    <div className="skills-grid">
      {flatSkills.map((skill) => {
        const SkillIcon = skill.icon;
        return (
          <div
            key={skill.name}
            className="skill-card"
            style={{ minHeight: '200px' }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              <SkillIcon size={32} />
            </div>
            <h4 className="skill-name">{skill.name}</h4>
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
            {flatSkills.map((skill, index) => {
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