const pStyle = { marginBottom: "60px" };

const sectionFStyle = {
  padding: "50px",
  background: "#0D0D0D",
  borderRadius: "200px 40px 40px 40px",
  boxShadow: "0px 0px 70px #fff",
};

function Formations() {
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
                src="pictures/competences/center-image3.png"
              />
            </div>
          </div>
        </div>
      </div>

      <section id="FormationsSection" style={sectionFStyle}>
        <div className="row ">
          <div className="col-md-12 expos">
            <h2>FORMATIONS</h2>
            <p style={pStyle}>
              Après un baccalauréat en mathématiques avec mention bien, j'ai découvert ma véritable passion pour l'informatique, ce qui m'a conduit à me réorienter dans ce domaine. Mon parcours en informatique et mes expériences professionnelles m'ont permis d'acquérir des compétences solides et de confirmer mon enthousiasme pour la technologie. Je suis maintenant déterminé à poursuivre et à développer ma carrière dans ce secteur dynamique.
            </p>

            <div className="row">
              <div className="col-md-4 ">
                <ul className="ligne">
                  <li>
                    <h3>
                      Baccalaureat Mathématiques <span> (2020-2021)</span>
                    </h3>
                  </li>
                  <li>
                    Cours de Mathématiques et calcul function et intégral...
                  </li>
                  <li>
                    Travaux pratiques en Physique , incluant des expériences en
                    laboratoire....
                  </li>
                  <li>
                    Cours théoriques et travaux dirigés (TD) en génie civil...
                  </li>
                  <li>Travaux dirigés (TD) en Chimie...</li>
                  <li>Cours de langues Français - Anglais...</li>
                </ul>
              </div>
              <div className="col-md-4 ">
                <ul className="ligne">
                  <li>
                    <h3>
                      Licence 1 Sciences et technologie{" "}
                      <span> (2021-2022)</span>
                    </h3>
                  </li>
                  <li>
                    Cours de Mathématiques avancées en calcul différentiel et
                    intégral.
                  </li>
                  <li>
                    Travaux pratiques en Physique, incluant des expériences en
                    laboratoire
                  </li>
                  <li>Cours théoriques et travaux dirigés (TD) en Chimie</li>
                  <li>
                    TD de Mathématiques pour renforcer la compréhension des
                    concepts fondamentaux
                  </li>
                </ul>
              </div>
              <div className="col-md-4 ">
                <ul className="ligne">
                  <li>
                    <h3>
                      Bac +1 Enigma LILLE <span> (2022-2023)</span>
                    </h3>
                  </li>
                  <li>
                    Programme complet et diversifié en informatique et
                    technologies numériques.
                  </li>
                  <li>
                    Acquisition d'une solide base de connaissances dans divers
                    domaines informatiques.
                  </li>
                  <li>Préparation aux défis du monde de l'informatique.</li>
                  <li>
                    Exploration de nouvelles opportunités dans le domaine de la
                    technologie.
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="ligne">
                  <li>
                    <h3>
                      Bac +2 ENIGMA Lille <span>2023-2024</span>
                    </h3>
                  </li>
                  <li>
                    Formation complète en développement web et technologies numériques avancées.
                  </li>
                  <li>
                    Apprentissage approfondi de divers langages de programmation modernes, tels que Next.js et C#.
                  </li>
                  <li>
                    Développement de compétences pratiques en création d'applications web et de logiciels.
                  </li>
                  <li>
                    Préparation aux défis du développement logiciel dans un environnement professionnel dynamique.
                  </li>
                  <li>
                    Exploration de nouvelles technologies et méthodologies pour rester à la pointe de l'innovation.
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
              <ul className="ligne">
                <li>
                  <h3>
                    Licence 3 Informatique - Parcours Informatique des Systèmes Embarqués et Interactifs <span>2024-2025</span>
                  </h3>
                </li>
                <li>
                  Formation spécialisée dans les systèmes embarqués et les interfaces interactives.
                </li>
                <li>
                  Acquisition de compétences en développement de logiciels pour systèmes embarqués et applications interactives.
                </li>
                <li>
                  Apprentissage approfondi des langages et outils spécifiques comme C, C++, et Python pour le développement embarqué.
                </li>
                <li>
                  Réalisation de projets pratiques intégrant la conception et la mise en œuvre de systèmes embarqués.
                </li>
                <li>
                  Développement de compétences en conception d'interfaces utilisateur et en interaction homme-machine.
                </li>
                <li>
                  Préparation à des défis techniques avancés à travers des études de cas et des projets en collaboration avec l'industrie.
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Formations;
