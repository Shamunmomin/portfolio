import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaDownload, FaGithub, FaEnvelope, FaLinkedin, FaCode, FaDatabase, FaTools, FaServer, FaGraduationCap, FaAward, FaBriefcase, FaProjectDiagram, FaCheckCircle, FaExternalLinkAlt, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import './index.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [typedText, setTypedText] = useState('')
  const [scrolled, setScrolled] = useState(false)
  // const [activeSection, setActiveSection] = useState('hero')
  
  const fullText = "Java Full Stack Developer"

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [typedText])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = {
    backend: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Hibernate', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'Microservices', level: 50 },
    ],
    frontend: [
      { name: 'React.js', level: 80 },
      { name: 'Angular', level: 60 },
      { name: 'React Native', level: 70 },
      { name: 'TypeScript', level: 70 },
      { name: 'Bootstrap/Tailwind', level: 80 },
    ],
    database: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Git/GitHub', level: 90},
      { name: 'Docker', level:70 },
      { name: 'Postman', level:80 }
    ]
    
  }

  const projects = [
    {
      title: 'Mango Plus',
      description: 'Mango Plus is an innovative agricultural technology platform designed to bridge the gap between farmers and markets',
      techStack: ['Java', 'Spring Boot', 'React Native', 'PostgreSQL'],
      features: [
        'Direct farmer-to-merchant trading platform',
        'Real-time notifications',
        'Team management',
        ' Integrated logistics and supply chain management',
      ],
      image: '/mangoplus_img.png',
      github: 'https://github.com/Shamunmomin',
      live: 'https://play.google.com/store/apps/details?id=in.mangoplus',
    },
    {
      title: 'Petrol Pump System',
      description: 'Built a full-stack application to streamline petrol pump operations, including sales tracking, shift management, and automated report generation with many functionalities.',
      techStack: ['Java', 'Spring Boot', 'React & React Native', 'PostgreSQL'],
      features: [
        'Fuel transaction management',
        'Employee & shift management',
        'Financial reporting',
        'Cash & Online Collection Tracking',
        'supplier management',
      ],
      image: '/petrol_pump_img.png',
      github: 'https://github.com/Shamunmomin',
      live: 'https://fuelsathi.com/home',
    },
    {
      title: 'Gram-Panchayat Web Application',
      description: 'Built a digital platform to streamline village governance with online services, improved transparency, and efficient administration.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker'],
      features: [
        'User authentication with JWT',
        'Citizen Services Portal (Government Schemes)',
        'Photo Gallery & Event Management',
        'Certificate Issuance System',
      ],
      image: '/grampanchayat_img.png',
      github: 'https://github.com/Shamunmomin',
      live: 'https://gpshivkar.in/',
    },
    
  ]

  const experiences = [
    {
      title: 'Java Full Stack Developer',
      company: 'Vedaniti technologies pvt ltd.',
      period: 'Jun 2025 - Present',
      description: 'Developing enterprise applications using Java Spring Boot and React/React Native',
      responsibilities: [
        'Design and develop end-to-end applications',
        'Built RESTful APIs',
        'Implemented Monolithic architecture',
        'Developed responsive UI components',
        'Design and manage databases (PostgreSQL / MySQL)',
        'Handle application deployment and production setup'
      ],
    },
    {
      title: 'Java Full Stack Developer Training',
      company: 'kiran Academy',
      period: 'Jun 2024 - jan 2025',
      description: 'Completed intensive training in Full Stack Java Development',
      responsibilities: [
        'Built end-to-end web applications using Java, Spring Boot, and frontend technologies like React and Angular',
        'Developed REST APIs and integrated them with frontend applications',
        'Worked on database design using MySQL/PostgreSQL',
        'Learned and applied clean code practices and MVC architecture',
        'Deployed applications and understood production-level workflows'
      ],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      school: 'Annsaheb Magar College Pune',
      period: '2021 - 2024',
      description: 'Focused on software engineering and web technologies',
    },
  ]

  const achievements = [
    'Certified Java Developer',
    'Emprego Training Completion Certificate',
    'Completed 3+ projects using Java and Spring Boot',
    'Developed a real-world Petrol Pump Management System with full functionality',
    'Reduced API response time by 40% through optimization',
    'Developed a mobile app with React Native that is available on Google Play Store',
    
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Particles isDarkMode={isDarkMode} />
      <GradientMesh isDarkMode={isDarkMode} />
      
      <motion.header
        className={`header ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="nav">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <HiOutlineSparkles className="logo-icon" />
            <span>SM</span>
          </motion.div>
          
          <div className="nav-links">
            {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact', 'Resume'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* <motion.button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaSun />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaMoon />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button> */}
        </nav>
      </motion.header>

      <main className="main">
        <section id="hero" className="section hero">
          <div className="hero-content">
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-glow"></div>
              <img
                src="/profile4.jpeg"
                alt="Profile"
                className="hero-image"
              />
              <motion.div
                className="hero-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="hero-greeting"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="hero-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Shamun Momin
              </motion.h1>
              <div className="hero-title">
                <span className="typewriter">{typedText}</span>
                <span className="cursor">|</span>
              </div>
              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Building scalable solutions with Java, Spring Boot & React
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <motion.a
                  href="#resume"
                  className="btn btn-primary"
                  onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload /> Resume
                </motion.a>
                <motion.a
                  href="https://github.com/Shamunmomin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn btn-outline"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope /> Contact
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="scroll-arrow"></div>
          </motion.div>
        </section>

        <section id="about" className="section about">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <FaCode className="section-icon" />
              About Me
            </h2>
            <div className="about-content">
              <div className="about-text">
                <motion.p
                  className="about-paragraph"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  With <strong>1 year of hands-on experience</strong> as a Java Full Stack Developer,
                  I've developed a strong foundation in building robust, scalable applications.
                  My expertise lies in leveraging Java's ecosystem along with modern frontend technologies
                  to create seamless user experiences.
                </motion.p>
                <motion.p
                  className="about-paragraph"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  I specialize in <strong>Spring Boot</strong> for backend development and
                  <strong> React</strong> for frontend, following industry best practices
                  like clean architecture, CI/CD pipelines, and test-driven development.
                  I'm passionate about writing efficient, maintainable code.
                </motion.p>
                <motion.p
                  className="about-paragraph"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  I solve complex problems by breaking them down into manageable components,
                  focusing on <strong>performance optimization</strong>, <strong>security</strong>,
                  and <strong>user-centric design</strong>. My goal is to build systems that
                  not only work flawlessly but also provide exceptional user experiences.
                </motion.p>
              </div>

              <motion.div
                className="tech-focus"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3>Tech Focus</h3>
                <div className="tech-tags">
                  {['Java', 'Spring Boot', 'React', 'Angular', 'MySQL', 'PostgreSQL', 'Docker', 'Hibernate', 'REST APIs'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="section skills">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <FaServer className="section-icon" />
              Skills & Technologies
            </h2>
            <div className="skills-grid">
              <motion.div
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="skill-category-header">
                  <FaServer className="skill-icon" />
                  <h3>Backend</h3>
                </div>
                <div className="skill-list">
                  {skills.backend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="skill-category-header">
                  <FaCode className="skill-icon" />
                  <h3>Frontend</h3>
                </div>
                <div className="skill-list">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="skill-category-header">
                  <FaDatabase className="skill-icon" />
                  <h3>Database & Tools</h3>
                </div>
                <div className="skill-list">
                  {skills.database.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

             
            </div>
          </motion.div>
        </section>

        <section id="projects" className="section projects">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <FaProjectDiagram className="section-icon" />
              Featured Projects
            </h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay"></div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.map((feature) => (
                          <li key={feature}>
                            <FaCheckCircle className="check-icon" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub /> Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="section experience">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <FaBriefcase className="section-icon" />
              Work Experience
            </h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{exp.title}</h3>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-responsibilities">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <FaCheckCircle className="check-icon" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="education" className="section education">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <FaGraduationCap className="section-icon" />
              Education
            </h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="education-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <FaGraduationCap className="education-icon" />
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <span className="education-period">{edu.period}</span>
                  <p>{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="achievements" className="section achievements">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <FaAward className="section-icon" />
              Achievements & Certifications
            </h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  className="achievement-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <FaAward className="achievement-icon" />
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="resume" className="section resume">
          <motion.div
            className="resume-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)' }}
          >
            <div className="resume-content">
              <h2>Download My Resume</h2>
              <p>Get a detailed overview of my skills, experience, and projects</p>
              <motion.a
                href="../public/samTech_resume.pdf"
                className="btn btn-primary btn-large"
                download
                whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="section contact">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <FaEnvelope className="section-icon" />
              Get In Touch
            </h2>
            <div className="contact-grid">
              <motion.div
                className="contact-info"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3>Let's Connect</h3>
                <p>
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your visions.
                </p>
                <div className="contact-details">
                  <motion.div
                    className="contact-item"
                    whileHover={{ x: 10 }}
                  >
                    <FaEnvelope className="contact-icon" />
                    <span>john.doe@email.com</span>
                  </motion.div>
                  <motion.div
                    className="contact-item"
                    whileHover={{ x: 10 }}
                  >
                    <FaPhone className="contact-icon" />
                    <span>+1 (555) 123-4567</span>
                  </motion.div>
                  <motion.div
                    className="contact-item"
                    whileHover={{ x: 10 }}
                  >
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>New York, USA</span>
                  </motion.div>
                </div>
                <div className="social-links">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -5 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -5 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                </div>
              </motion.div>

              <motion.form
                className="contact-form"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary btn-full"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </motion.p>
      </footer>
    </div>
  )
}

function Particles({ isDarkMode }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = isDarkMode
          ? `rgba(139, 92, 246, ${particle.opacity})`
          : `rgba(99, 102, 241, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [isDarkMode])

  return <canvas ref={canvasRef} className="particles-canvas" />
}

function GradientMesh({ isDarkMode }) {
  return (
    <div className={`gradient-mesh ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="gradient-orb orb-4"></div>
    </div>
  )
}

export default App
