import { scrollToElement } from "./Navbar";

function NavMobile() {
  return (
    <nav className="nav-mobile" aria-label="Navigation mobile">
      <ul>
        <li>
          <button
            onClick={() => scrollToElement("QuiSuisJeSection")}
            aria-label="Aller à la section Qui suis-je"
          >
            <img
              alt="Navigation vers la section Qui suis-je"
              src="pictures/navmobile/quisuisje.png"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToElement("CoordonnéesSection")}
            aria-label="Aller à la section Coordonnées"
          >
            <img
              alt="Navigation vers la section Coordonnées"
              src="pictures/coordonnees/source-locale.png"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToElement("competencesSection")}
            aria-label="Aller à la section Compétences"
          >
            <img
              alt="Navigation vers la section Compétences"
              src="pictures/navmobile/competences.png"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToElement("FormationsSection")}
            aria-label="Aller à la section Formations"
          >
            <img
              alt="Navigation vers la section Formations"
              src="pictures/navmobile/formations.png"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToElement("ExperiencesSections")}
            aria-label="Aller à la section Expériences"
          >
            <img
              alt="Navigation vers la section Expériences"
              src="pictures/navmobile/experiences.png"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToElement("projets")}
            aria-label="Aller à la section Projets"
          >
            <img
              alt="Navigation vers la section Projets"
              src="pictures/navmobile/prj.png"
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToElement("Certifications")}
            aria-label="Aller à la section Certifications"
          >
            <img
              alt="Navigation vers la section Certifications"
              src="pictures/navmobile/crt.png"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavMobile;
