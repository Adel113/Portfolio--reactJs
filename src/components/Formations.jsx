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


            <div className="row">

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

                    Programme complet et axé sur l'informatique et technologies numériques.
                  </li>
                  <li>
                    Acquisition de bases solides en développement web, bases de données et C++.

                  </li>
                  <li>Initiation à la gestion de projet et ses outils essentiels.</li>
                  <li>

                    Exploration d'opportunités en technologies modernes et innovantes.
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="ligne">
                  <li>
                    <h3>
                      Licence 3 Informatique des systèmes embarqués - Université
                      Paris 8 <span>2024-2025</span>
                    </h3>
                  </li>
                  <li>
                    Développement diversifié (apps mobiles, logicielles et embarquées).
                  </li>
                  <li>
                    Conception et optimisation pour systèmes embarqués et informatique générale.
                  </li>
                  <li>Gestion de projets mobiles, web et systèmes techniques avancés.</li>
                  <li>
                    Bases en électronique pour intégration matériel et logiciel performante.
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
