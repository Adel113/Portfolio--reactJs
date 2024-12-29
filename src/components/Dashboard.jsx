import React, { Suspense, lazy } from 'react';
import Navbar from "./Navbar";

// Lazy loading for components
const Competences = lazy(() => import("./Competences"));
const Coordonnees = lazy(() => import("./Coordonnees"));
const Formations = lazy(() => import("./Formations"));
const ExperiencesPro = lazy(() => import("./ExperiencesPro"));
const Projects = lazy(() => import("./Projects"));
const Certificat = lazy(() => import("./Certificat"));

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <Navbar />
        <div className="dashboard-app">
          <div className="dashboard-content">
            <div className="container">
              <div style={{ display: "none" }}>
              <h1>Portfolio d'Adel Sidi Ahmed</h1>
              <p>
                Bienvenue sur le portfolio d'Adel Sidi Ahmed, un étudiant en Licence 3 Informatique des systèmes embarqués.
                Découvrez ses compétences, projets et expériences professionnels.
              </p>
              </div>
              

              <Suspense fallback={<div>Chargement...</div>}>
                <Coordonnees />
                <Competences />
                <Formations />
                <ExperiencesPro />
                <Projects />
                <Certificat />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
