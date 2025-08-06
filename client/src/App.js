import React, { useState, useEffect } from 'react';

import './App.css';
import rhmImg from './imgs/rhm.png';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTelegramPlane, 
  FaMapMarker, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa';

function App() {
  const fullName = "Hi,I'm Riham Bouchiha!";
  const [displayedName, setDisplayedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let forward = true;

    const interval = setInterval(() => {
      if (forward) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
        if (index === fullName.length) forward = false;
      } else {
        setDisplayedName(fullName.slice(0, index - 1));
        index--;
        if (index === 0) forward = true;
      }
    }, 200);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#education" className='nav-link'>Education</a></li>
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li><a href="#certifications" className='nav-link'>Certifications</a></li>
          <li><a href='#experiences' className='nav-link'>Experiences</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <section id="home" className="section home-section">
          <div className="home-content">
            <div className="home-photo-wrapper">
              <img src={rhmImg} alt="Photo de Riham Bouchiha" className="home-photo" />
            </div>

            <div className="text-area">
              <h1 className="typing">
                {displayedName}
                <span className="cursor">{showCursor ? '|' : ' '}</span>
              </h1>
              <hr className="separator" />
              <h3>Software Engineering Student</h3>
              <p>
                Je suis passionnée par le développement logiciel et je cherche à
                créer des applications performantes et modernes. Bienvenue sur mon portfolio !
              </p>

              <button
                className="btn-say-hello"
                onClick={() => window.location.href = '#contact'}
              >
                <FaTelegramPlane style={{ marginRight: '10px' }} /> Say Hello
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <h1 className="about-title">About Me</h1>
          <span className="section-subtitle">Introduction</span>

          <div className="about-container">
            <div className="about-photo-wrapper">
              <img src={rhmImg} alt="Riham Bouchiha" className="about-photo" />
            </div>
            <div className="about-details">
              <div className="about-cards">
                <div className="about-card">
                  <span className="card-title">💼 Experience</span>
                  <p>3 Years</p>
                </div>
                <div className="about-card">
                  <span className="card-title">📞 Support</span>
                  <p>Online 24/7</p>
                </div>
              </div>
              <p className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates optio libero, unde quos nihil rem doloribus officiis eveniet, dolore assumenda quis. Quia molestiae temporibus tempora pariatur eos vitae dolore 
              deserunt ratione ad voluptatibus illum repudiandae, perferendis ullam sunt nulla ipsum odit totam fugiat accusamus officia ducimus officiis atque! Officia necessitatibus dolorem 
              voluptatem cum rerum nesciunt consectetur, dignissimos accusamus possimus modi ipsa obcaecati doloremque itaque facilis ea, aspernatur, accusantium amet consequatur debitis laudantium 
              earum perspiciatis est facere iste? Aut recusandae eaque, omnis sapiente dolorem soluta aspernatur 
              tempora esse ratione, quibusdam magnam expedita accusamus at sit ex nemo beatae! Iure mollitia 
              ut veniam at obcaecati ab, nemo esse
              </p>
              <div className="about-buttons">
                <a href="/cv_en.pdf" download className="btn-cv">
                  📄 Download CV-En
                </a>
                <a href="/cv_fr.pdf" download className="btn-cv">
                  📄 Télécharger CV-Fr
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <h1 className="section-title">Skills</h1>
          <h2 className="skills-subtitle">Technologies I Master</h2>

          <div className="skills-container">
            <div className="skills-column">
              <h3>Programming Languages</h3>
              <div className="skills-icons">
                <div className="skill"><i className="devicon-c-plain colored"></i><span>C</span></div>
                <div className="skill"><i className="devicon-cplusplus-plain colored"></i><span>C++</span></div>
                <div className="skill"><i className="devicon-csharp-plain colored"></i><span>C#</span></div>
                <div className="skill"><i className="devicon-java-plain colored"></i><span>Java</span></div>
                <div className="skill"><i className="devicon-javascript-plain colored"></i><span>JavaScript</span></div>
              </div>
            </div>

            <div className="skills-column">
              <h3>Frameworks & Libraries</h3>
              <div className="skills-icons">
                <div className="skill"><i className="devicon-react-original colored"></i><span>React</span></div>
                <div className="skill"><i className="devicon-nodejs-plain colored"></i><span>Node.js</span></div>
                <div className="skill"><i className="devicon-express-original colored"></i><span>Express.js</span></div>
                <div className="skill"><i className="devicon-django-plain colored"></i><span>Django</span></div>
                <div className="skill"><i className="devicon-bootstrap-plain colored"></i><span>Bootstrap</span></div>
              </div>
            </div>

            <div className="skills-column">
              <h3>Databases</h3>
              <div className="skills-icons">
                <div className="skill"><i className="devicon-postgresql-plain colored"></i><span>PostgreSQL</span></div>
                <div className="skill"><i className="devicon-mysql-plain colored"></i><span>MySQL</span></div>
                <div className="skill"><i className="devicon-mongodb-plain colored"></i><span>MongoDB</span></div>
                <div className="skill"><i className="devicon-sqlite-plain colored"></i><span>SQLite</span></div>
              </div>
            </div>

            <div className="skills-column">
              <h3>Tools & Technologies</h3>
              <div className="skills-icons">
                <div className="skill"><i className="devicon-git-plain colored"></i><span>Git</span></div>
                <div className="skill"><i className="devicon-docker-plain colored"></i><span>Docker</span></div>
                <div className="skill"><i className="devicon-figma-plain colored"></i><span>Figma</span></div>
                <div className="skill"><i className="devicon-postman-plain colored"></i><span>Postman</span></div>
                <div className="skill"><i className="devicon-jira-plain colored"></i><span>Jira</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section education-section">
          <h1 className="section-title">Education</h1>
          <div className="education-timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-degree">Lycée Abi Abbass Sebti</h3>
                <p className="timeline-institution">High School Diploma</p>
                <span className="timeline-duration">2013 – 2016</span>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-degree">Faculté de Médecine Strasbourg</h3>
                <p className="timeline-institution">Medical Studies</p>
                <span className="timeline-duration">2016 – 2019</span>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-degree">EST Fès</h3>
                <p className="timeline-institution">Engineering Studies</p>
                <span className="timeline-duration">2019 – 2021</span>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-degree">ENIAD</h3>
                <p className="timeline-institution">Specialized Training</p>
                <span className="timeline-duration">2021 – Present</span>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section portfolio-section">
          <h1 className="section-title">Portfolio</h1>
          <h2 className="section-subtitle">My Recent Work</h2>

          <div className="portfolio-container">
            <div className="portfolio-card">
              <img src="/projects/project1.jpg" alt="Project 1" className="portfolio-image" />
              <h3 className="portfolio-title">Project Name</h3>
              <a href="https://lien-vers-plus.com" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                En savoir plus →
              </a>
            </div>

            <div className="portfolio-card">
              <img src="/projects/project2.jpg" alt="Project 2" className="portfolio-image" />
              <h3 className="portfolio-title">Another Project</h3>
              <a href="https://lien-vers-plus.com" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                En savoir plus →
              </a>
            </div>
          </div>
        </section>

        <section id="certifications" className="section certifications-section">
          <h1 className="section-title">Certifications</h1>
          <h2 className="section-subtitle">Mes Réalisations Certifiées</h2>

          <div className="certifications-container">
            <div className="certification-card">
              <img src="/certifications/cert1.jpg" alt="Certification 1" className="certification-image" />
              <div className="certification-content">
                <h3>JavaScript Algorithms and Data Structures</h3>
                <p>freeCodeCamp</p>
                <a href="https://www.freecodecamp.org/certification/tonlien" target="_blank" rel="noopener noreferrer" className="certification-link">
                  Voir le certificat →
                </a>
              </div>
            </div>

            <div className="certification-card">
              <img src="/certifications/cert2.jpg" alt="Certification 2" className="certification-image" />
              <div className="certification-content">
                <h3>React - The Complete Guide</h3>
                <p>Udemy</p>
                <a href="https://www.udemy.com/certificate/tonlien" target="_blank" rel="noopener noreferrer" className="certification-link">
                  Voir le certificat →
                </a>
              </div>
            </div>

            <div className="certification-card">
              <img src="/certifications/cert3.jpg" alt="Certification 3" className="certification-image" />
              <div className="certification-content">
                <h3>Node.js and Express</h3>
                <p>Coursera</p>
                <a href="https://coursera.org/certificate/tonlien" target="_blank" rel="noopener noreferrer" className="certification-link">
                  Voir le certificat →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="qualification-section experience-section">
          <h2 className="section-title">Expériences</h2>
          <div className="education-timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">Développeur Frontend</h3>
                <p className="timeline-company">Entreprise XYZ</p>
                <p className="timeline-duration">Janvier 2023 - Présent</p>
                <p className="timeline-description">
                  Développement d'applications web modernes en React.
                </p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">Stage en développement web</h3>
                <p className="timeline-company">Agence ABC</p>
                <p className="timeline-duration">Juin 2022 - Décembre 2022</p>
                <p className="timeline-description">
                  Participation à la refonte du site vitrine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2 className="section-title">Contact</h2>
          <span className="section-subtitle">Get in touch</span>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <FaMapMarker className="contact-icon" />
                <h3 className="contact-title">Address</h3>
                <span className="contact-data">Rabat, Morocco</span>
              </div>

              <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <h3 className="contact-title">Email</h3>
                <span className="contact-data">riham@example.com</span>
              </div>

              <div className="contact-card">
                <FaPhoneAlt className="contact-icon" />
                <h3 className="contact-title">Phone</h3>
                <span className="contact-data">+212 600 000 000</span>
              </div>
            </div>

            <form className="contact-form">
              <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
              <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
              <textarea name="message" rows="7" placeholder="Your Message" required className="contact-input"></textarea>
              <button type="submit" className="btn btn-contact">Send Message</button>
            </form>
          </div>

          <div className="contact-footer-socials">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <FaInstagram />
            </a>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;
