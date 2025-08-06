import React from 'react';
import './App.css';
import rhmImg from './imgs/rhm.png';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#qualification" className='nav-link'>Qualification</a></li>
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li><a href="#certifications" className='nav-link'>Certifications</a></li>
          <li><a href='#experiences' className='nav-link'>Experiences</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Contenu principal */}
      <main className="main-content">

        {/* Home Section */}
        <section id="home" className="section home-section">
          <div className="home-content">
            <div className="home-photo-wrapper">
              <img src={rhmImg} alt="Photo de Riham Bouchiha" className="home-photo" />
            </div>

            <div className="text-area">
              <h1>Riham Bouchiha</h1>
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

            <div className="social-icons-vertical">
              <a href="https://github.com/TON_GITHUB" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/TON_LINKEDIN" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <h1 className="about-title">About Me</h1>
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


        <section id="skills" className="section">
          <h1>Skills</h1>
          <p>Compétences techniques...</p>
        </section>

        {/* ... Autres sections comme qualification, portfolio, etc. */}

      </main>
    </>
  );
}

export default App;
