

import './style/Navbar.css';
import './style/Dashboard.css';


export function scrollToElement(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  return (
    <div className="dashboard-nav">
      <header>
        <a href="#domaine" className="brand-logo">
          <img className="menuasa" src="pictures/coordonnees/ADELCV.PNG" alt="" />
          <span>ASA</span>
        </a>
      </header>
      <nav className="dashboard-nav-list">
        <a href="#quiSuisje" onClick={() => scrollToElement('QuiSuisJeSection')} className="dashboard-nav-item">
          <i className="fas fa-home">
            <img alt="linkedin" src="pictures/navmobile/quisuisje.png" />
          </i>
          Qui suis-je !
        </a>
        <a href="#coordonnees" onClick={() => scrollToElement('CoordonnéesSection')} className="dashboard-nav-item">
          <i className="fas fa-file-upload">
            <img alt="linkedin" src="pictures/coordonnees/source-locale.png" />
          </i>
          Coordonnées
        </a>
        <a href="#competences" onClick={() => scrollToElement('competencesSection')} className="dashboard-nav-item">
          <i className="fas fa-file-upload">
            <img alt="linkedin" src="pictures/navmobile/competences.png" />
          </i>
          Compétences
        </a>
        <a href="#Formations" onClick={() => scrollToElement('FormationsSection')} className="dashboard-nav-item" id="FormationsLink">
          <i className="fas fa-file-upload">
            <img alt="linkedin" src="pictures/navmobile/formations.png" />
          </i>
          Formations
        </a>
        <a href="#Experiences" onClick={() => scrollToElement('ExperiencesSections')} className="dashboard-nav-item" id="ExperiencesLink">
          <i className="">
            <img alt="linkedin" src="pictures/navmobile/experiences.png" />
          </i>
          EXPÉRIENCES
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
