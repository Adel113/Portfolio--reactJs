const sectionEStyle = {
  padding: "50px",
  background: "#0D0D0D",
  borderRadius: "40px 40px 40px 200px",
  boxShadow: "0px 0px 70px #fff",
};

function ExperiencesPro() {
  return (
    <div>
      <div className="animation-trigger" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="bounce-top scroll-animation">
              <img
                className="center"
                style={{ display: "block", width: "50%", margin: "auto" }}
                alt="séparation de la page"
                src="pictures/competences/center-image5.png"
              />
            </div>
          </div>
        </div>
      </div>

      <section id="ExperiencesSections" style={sectionEStyle}>
        <div className="row">
          <div className="col-md-12 expos">
            <h2>EXPÉRIENCES PROFESSIONNELLES</h2>
            
            <div className="row">
              <div className="col-md-4">
                <ul className="ligne">
                  <li>
                    <h3>
                      Stage chez Lou <span>(05/2024 - 07/2024)</span>
                    </h3>
                  </li>
                  <li>
                    Conception et développement d'un site web pour un restaurant en utilisant WordPress.
                  </li>
                  <li>
                    Intégration des meilleures pratiques en SEO pour optimiser la visibilité.
                  </li>
                  <li>
                    Application des principes de graphisme pour créer un design attrayant.
                  </li>
                  <li>
                    Mise en œuvre de bonnes pratiques du développement web pour une expérience utilisateur optimale.
                  </li>
                  <li>
                    Utilisation de logiciels de design pour élaborer des visuels cohérents avec l'identité du restaurant.
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="ligne">
                  <li>
                    <h3>
                      Stage en Dev Web <span> (06/2023-08/2023)</span>
                    </h3>
                  </li>
                  <li>Participation à la conception et au développement de sites web et d'applications web</li>
                  <li>Programmation avec HTML, CSS, JavaScript et autres langages pertinents</li>
                  <li>Création et refonte de sites pour une expérience utilisateur optimale</li>
                  <li>Utilisation de Photoshop et Canva pour des visuels percutants</li>
                  <li>Gestion des Réseaux Sociaux pour promouvoir les projets</li>
                  <li>Maîtrise des techniques SEO pour une meilleure visibilité</li>
                  <li>Objectif : créer une présence en ligne captivante et efficace</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="ligne">
                  <li>
                    <h3>
                      Graphiste designer <span>(2018-2022)</span>
                    </h3>
                  </li>
                  <li>Création de maquettes pour des panneaux publicitaires et numériques</li>
                  <li>Conception de cartes de visite professionnelles</li>
                  <li>Maîtrise de logiciels comme Adobe Photoshop</li>
                  <li>Collaboration avec des agences pour des services de haute qualité</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="ligne">
                  <li>
                    <h3>
                      Spécialiste du flockage <span>(2018-2022)</span>
                    </h3>
                  </li>
                  <li>Réalisation de travaux de flockage sur divers supports</li>
                  <li>Utilisation de techniques avancées de flockage</li>
                  <li>Gestion des commandes et coordination avec les clients</li>
                  <li>Connaissance des machines et matériaux utilisés pour le flockage</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="ligne">
                  <li>
                    <h3>
                      Propriétaire d'un Magasin de Crêpes et Glaces <span> (2019-2022)</span>
                    </h3>
                  </li>
                  <li>Gestion complète du magasin et supervision du personnel</li>
                  <li>Création de stratégies de marketing pour attirer des clients</li>
                  <li>Gestion des finances, y compris la comptabilité</li>
                  <li>Maintien des normes d'hygiène et de sécurité alimentaire</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="ligne">
                  <li>
                    <h3>
                      Entraîneur de Vo-Vietnam <span> (2018-2022)</span>
                    </h3>
                  </li>
                  <li>Enseignement des techniques de Vo-Vietnam à divers niveaux</li>
                  <li>Organisation et supervision des entraînements réguliers</li>
                  <li>Préparation des élèves pour des compétitions</li>
                  <li>Création de programmes de formation personnalisés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExperiencesPro;
