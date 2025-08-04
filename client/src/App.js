import React from 'react';
import './App.css'; // Pour le style global
import rhmImg from './imgs/rhm.png';


function App() {
  return (
    <>
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

      <main className="main-content">
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
    </div>
  </div>
</section>


        <section id="about" className="section">
          <h1>About</h1>
          <p>Présentation personnelle...</p>
        </section>

        <section id="skills" className="section">
          <h1>Skills</h1>
          <p>Compétences techniques...</p>
        </section>

        <section id="qualification" className="section">
          <h1>qualification</h1>
          <p>Compétences techniques...</p>
        </section>

        <section id="portfolio" className="section">
          <h1>Portfolio</h1>
          <p>Mes projets réalisés...</p>
        </section>

        <section id="certifications" className="section">
          <h1>certifications</h1>
          <p>Compétences techniques...</p>
        </section>

        <section id="experiences" className="section">
          <h1>experiences</h1>
          <p>Compétences techniques...</p>
        </section>

        <section id="contact" className="section">
          <h1>Contact</h1>
          <p>Me joindre par email, téléphone...</p>
        </section>
      </main>
    </>
  );
}

export default App;
