/** @format */

import "../style/Navbar.css";
import "../style/Dashboard.css";

export function scrollToElement(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

function Navbar() {
  const navstyle = { boxShadow: "0px 0px 70px #fff" };
  return (
    <div className="dashboard-nav" style={navstyle}>
      <header>
        <a href="domaine" className="brand-logo" aria-label="Logo de la marque">
          <img
            className="menuasa"
            src="pictures/coordonnees/ADELCV.PNG"
            alt="Logo ASA"
          />
          <span>ASA</span>
        </a>
      </header>
      <nav className="dashboard-nav-list" aria-label="Menu principal">
        <a
          href="quiSuisje"
          onClick={() => scrollToElement("QuiSuisJeSection")}
          className="dashboard-nav-item"
          aria-label="Aller à la section Qui suis-je"
        >
          <i className="fas fa-home">
            <img
              alt="Icône pour la section Qui suis-je"
              src="pictures/navmobile/quisuisje.png"
            />
          </i>
          Qui suis-je !
        </a>
        <a
          href="coordonnees"
          onClick={() => scrollToElement("CoordonnéesSection")}
          className="dashboard-nav-item"
          aria-label="Aller à la section Coordonnées"
        >
          <i className="fas fa-file-upload">
            <img
              alt="Icône pour la section Coordonnées"
              src="pictures/coordonnees/source-locale.png"
            />
          </i>
          Coordonnées
        </a>
        <a
          href="competences"
          onClick={() => scrollToElement("competencesSection")}
          className="dashboard-nav-item"
          aria-label="Aller à la section Compétences"
        >
          <i className="fas fa-file-upload">
            <img
              alt="Icône pour la section Compétences"
              src="pictures/navmobile/competences.png"
            />
          </i>
          Compétences
        </a>
        <a
          href="Formations"
          onClick={() => scrollToElement("FormationsSection")}
          className="dashboard-nav-item"
          id="FormationsLink"
          aria-label="Aller à la section Formations"
        >
          <i className="fas fa-file-upload">
            <img
              alt="Icône pour la section Formations"
              src="pictures/navmobile/formations.png"
            />
          </i>
          Formations
        </a>
        <a
          href="Experiences"
          onClick={() => scrollToElement("ExperiencesSections")}
          className="dashboard-nav-item"
          id="ExperiencesLink"
          aria-label="Aller à la section Expériences"
        >
          <i className="">
            <img
              alt="Icône pour la section Expériences"
              src="pictures/navmobile/experiences.png"
            />
          </i>
          EXPÉRIENCES
        </a>
        <a
          href="projets"
          onClick={() => scrollToElement("projets")}
          className="dashboard-nav-item"
          id="ExperiencesLink"
          aria-label="Aller à la section Projets"
        >
          <i className="">
            <img
              alt="Icône pour la section Projets"
              src="pictures/navmobile/prj.png"
            />
          </i>
          PROJETS
        </a>
        <a
          href="certifications"
          onClick={() => scrollToElement("Certifications")}
          className="dashboard-nav-item"
          id="ExperiencesLink"
          aria-label="Aller à la section Certifications"
        >
          <i className="">
            <img
              alt="Icône pour la section Certifications"
              src="pictures/navmobile/crt.png"
            />
          </i>
          CERTIFICATIONS
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
