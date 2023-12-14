/** @format */

import Navbar from "./Navbar";
import Competences from "./Competences";
import Coordonnees from "./Coordonnees";
import Formations from "./Formations";
import ExperiencesPro from "./ExperiencesPro";
import Projects from "./Projects";
import Certificat from "./Certificat";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <Navbar />
        <div className="dashboard-app">
          <div className="dashboard-content">
            <div className="container">
              <Coordonnees />
              <Competences />
              <Formations />
              <ExperiencesPro />
              <Projects />
              <Certificat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
