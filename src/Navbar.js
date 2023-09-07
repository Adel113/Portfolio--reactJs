

import './style/Navbar.css';
import './style/Dashboard.css';



export function scrollToCoordonnees() {
  const CoordonnéesSection = document.getElementById("CoordonnéesSection");
  if (CoordonnéesSection) {
    CoordonnéesSection.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToCompetences() {
  const competencesSection = document.getElementById("competencesSection");
  if (competencesSection) {
    competencesSection.scrollIntoView({ behavior: "smooth" });
  }
}
export function scrollToFormations() {
  const FormationsSection = document.getElementById("FormationsSection");
  if (FormationsSection) {
    FormationsSection.scrollIntoView({ behavior: "smooth" });
  }
}
export function scrollToExperiences() {
  const ExperiencesSections = document.getElementById("ExperiencesSections");
  if (ExperiencesSections) {
    ExperiencesSections.scrollIntoView({ behavior: "smooth" });
  }
}
export function scroolToQuiSuisJe() {
  const QuiSuisJeSection = document.getElementById("QuiSuisJeSection");
  if (QuiSuisJeSection) {
    QuiSuisJeSection.scrollIntoView({ behavior: "smooth" });
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
          <nav className="dashboard-nav-list ">

              <a href="#quiSuisje" onClick={scroolToQuiSuisJe}
              className="dashboard-nav-item ">
                <i className="fas fa-home">
                  
                  <img alt="linkedin" src="pictures/navmobile/quisuisje.png" />

                </i>Qui suis-je ! 
              </a> 
              <a href="#coordonnees" onClick={scrollToCoordonnees} className="dashboard-nav-item" >
                
                <i className="fas fa-file-upload">
                  
                   <img alt="linkedin" src="pictures/coordonnees/source-locale.png" />

                </i> Coordonnées 
              </a>
              <a href="#competences" onClick={scrollToCompetences} 
              className="dashboard-nav-item">
                <i className="fas fa-file-upload">
                  
                  <img alt="linkedin" src="pictures/navmobile/competences.png" />

                </i> Compétencess 
              </a>
              <a
              href="#Formations" onClick={scrollToFormations} className="dashboard-nav-item" id="FormationsLink">
                <i className="fas fa-file-upload">
                    
                    <img alt="linkedin" src="pictures/navmobile/formations.png" />  

                </i> Formations
              </a>
              <a href="#Experiences" onClick={scrollToExperiences} className="dashboard-nav-item" id="ExperiencesLink">
                <i className="">
                
                  <img alt="linkedin" src="pictures/navmobile/experiences.png" />

                </i> EXPÉRIENCES 
              </a>
    
          </nav>

        </div>
        
    );
  }
  
  export default Navbar;