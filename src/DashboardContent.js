import Competences from "./Competences";
import Coordonnees from "./Coordonnees";
import Formations from "./Formations";
import ExperiencesPro from "./ExperiencesPro";

function dashboardContent() {
    return (
      <div className="dashboard-content">
        <div className="container">
            <Coordonnees />
            <Competences />
            <Formations />
            <ExperiencesPro />
            
            
        </div>

      </div>
    );
  }
  
  export default dashboardContent;