import React from 'react';
import './App.css'; // Pour le style global

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <section id="home" className="section">
          <h1>Home</h1>
          <p>Bienvenue sur mon portfolio</p>
        </section>

        <section id="about" className="section">
          <h1>About</h1>
          <p>Présentation personnelle...</p>
        </section>

        <section id="skills" className="section">
          <h1>Skills</h1>
          <p>Compétences techniques...</p>
        </section>

        <section id="portfolio" className="section">
          <h1>Portfolio</h1>
          <p>Mes projets réalisés...</p>
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
