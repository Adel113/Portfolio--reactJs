
import Competences from "./Competences";
import Coordonnees from "./Coordonnees";
import Formations from "./Formations";
import ExperiencesPro from "./ExperiencesPro";
import Projects from "./Projects";
import Certificat from "./Certificat";

function dashboardContent() {
    return (
      <div className="dashboard-content">
        <div className="container">
            <Coordonnees />
            <Competences/>
            <Formations />
            <ExperiencesPro />
            <Projects/>
            <Certificat/>
            
            
            
        </div>

      </div>
    );
  }
  
  export default dashboardContent;