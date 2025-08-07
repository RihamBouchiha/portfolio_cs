import React, { useState, useEffect } from 'react';

import './App.css';
import rhmImg from './imgs/rhm.png';
import rhm1 from './imgs/rhmImg1.png';
import rhkHotel from './imgs/rhkHotel.png';

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
import { FaAward, FaBriefcase, FaHeadset } from 'react-icons/fa';


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
                I am a software engineering student in my fourth year of engineering school, with a technical degree in Computer Science. Passionate about DevOps, I build efficient, secure, and user-focused web and mobile applications.
                 Welcome to my portfolio — a showcase of my journey and achievements!
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
              <img src={rhm1} alt="Riham Bouchiha" className="about-photo" />
            </div>
            <div className="about-details">
             <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" />
              <span className="card-title">Experience</span>
              <p>4 Years</p>
            </div>

            <div className="about-card">
              <FaHeadset className="about-icon" />
              <span className="card-title">Support</span>
              <p>Online 24/7</p>
            </div>
          </div>

              <p className="about-text">
                It all started with a simple curiosity: “What happens when I click this button?”
                From that question grew a deep passion for computer science. Today, I’m a fourth-year software engineering student who builds efficient, intuitive, and secure web and mobile applications. I have a strong interest in cybersecurity and constantly explore new tools and practices in that field. I also master several programming languages, which allows me to adapt to different technical contexts with confidence.
              </p>
              <div className="about-buttons">
                <a href="/cv_riham_bouchiha.pdf" download className="btn-cv">
                📄 Download CV-En
                </a>
                <a href="/cv_riham_bouchiha.pdf" download className="btn-cv">
                📄 Télécharger CV-Fr
                </a>
            </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <h1 className="section-title">Skills</h1>
          <h2 className="section-subtitle">My Tech Toolbox</h2>     

          <div className="skills-container">
            <div className="skills-column">
              <h3>Programming Languages</h3>
              <div className="skills-icons">
                <div className="skill"><i className="devicon-c-plain colored"></i><span>C</span></div>
                <div className="skill"><i className="devicon-bash-plain colored"></i><span>Bash</span></div>
                <div className="skill"><i className="devicon-cplusplus-plain colored"></i><span>C++</span></div>
                <div className="skill"><i className="devicon-csharp-plain colored"></i><span>C#</span></div>
                <div className="skill"><i className="devicon-java-plain colored"></i><span>Java</span></div>
                <div className="skill"><i className="devicon-javascript-plain colored"></i><span>JavaScript</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /><span>Python</span></div>
                <div className="skill"><i className="devicon-php-plain colored"></i><span>PHP</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" /><span>R</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" /><span>Matlab</span></div>
              </div>
            </div>

            <div className="skills-column">
              <h3>Frameworks & Libraries</h3>
              <div className="skills-icons">
                <div className="skill"><i className="devicon-react-original colored"></i><span>React</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg" /><span>React Native</span></div>                <div className="skill"><i className="devicon-bootstrap-plain colored"></i><span>Bootstrap</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /><span>Node.js</span></div>
                <div className="skill"><i className="devicon-express-original colored"></i><span>Express.js</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" /><span>JSon</span></div>
                <div className="skill"><i class="devicon-jquery-plain colored"></i><span>JQuery</span></div>                
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /><span>Tailwind</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg" /><span>Chart.js</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" /><span>Mongoose</span></div>
                <div className="skill"><svg viewBox="0 0 128 128"><path fill="#2d3748" d="M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z"></path></svg><span>Prisma</span></div>
                <div className="skill"><img src="https://simpleicons.org/icons/jsonwebtokens.svg" alt="JWT Icon" style={{ width: '24px', height: '24px' }} /><span>JWT</span></div>

              </div>
            </div>

            <div className="skills-column">
              <h3>Databases</h3>
              <div className="skills-icons">
                <div className="skill"><i className="devicon-postgresql-plain colored"></i><span>PostgreSQL</span></div>
                <div className="skill"><i className="devicon-mysql-plain colored"></i><span>MySQL</span></div>
                <div className="skill"><i className="devicon-mongodb-plain colored"></i><span>MongoDB</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" /><span>SQLite</span></div>
                <div className="skill"><i class="devicon-mariadb-original colored"></i><span>MariaDb</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" /><span>Microsoft Sql Server</span></div>

              </div>
            </div>

            <div className="skills-column">
              <h3>Tools & Technologies</h3>
              <div className="skills-icons">
                <div className="skill"><i className="devicon-git-plain colored"></i><span>Git</span></div>
                <div className="skill"><i className="devicon-docker-plain colored"></i><span>Docker</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" /><span>Figma</span></div>
                <div className="skill"><i className="devicon-postman-plain colored"></i><span>Postman</span></div>
                <div className="skill"><i className="devicon-apache-line-wordmark"></i><span>Apache</span></div>
                <div className="skill"><i className="devicon-babel-plain colored"></i><span>Babel</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /><span>Git</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" /><span>Linux</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg" /><span>Postman</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg" /><span>UML</span></div>



              </div>
            </div>
          </div>
        </section>

       <section id="education" className="section education-section">
        <h1 className="section-title">Education</h1>
        <h2 className="section-subtitle">My Academic Journey</h2>
          <div className="education-timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-degree">Ecole Nationale de l'intelligence artificielle et du digital</h3>
                <p className="timeline-institution">Software engineering Degree</p>
                <span className="timeline-duration">2024- Present</span>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-degree">Ecole Supérieure de Technlogie de Fés</h3>
                <p className="timeline-institution">DUT-Computer Science Degree</p>
                <span className="timeline-duration">2022-2024</span>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-degree">Faculté de médecine Strasbourg FRANCE</h3>
                <p className="timeline-institution">L1 Sps-Spé Physique</p>
                <span className="timeline-duration">2021-2022</span>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-degree">Lycée Abi Abass Sebti</h3>
                <p className="timeline-institution">Baccalauriat Sciences Physique</p>
                <span className="timeline-duration">2020-2021</span>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="section portfolio-section">
          <h1 className="section-title">Portfolio</h1>
          <h2 className="section-subtitle">Your subtitle here</h2>
          <div className="portfolio-container">
            <div className="portfolio-card">
              <img src={rhkHotel} alt="Project 2" className="portfolio-image" />
              <h3 className="portfolio-title">RHK-Hotel</h3>
              <a href="https://rihambouchiha.github.io/PFE-HOTEL-RHK-Riham/" target="_blank" rel="noopener noreferrer" className="portfolio-link">
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
        <section id="experiences" className="section experience-section">
          <h1 className="section-title">Expériences</h1>
          <h2 className="section-subtitle">Your subtitle here</h2>

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
        <h1 className="section-title">Contact</h1>
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
