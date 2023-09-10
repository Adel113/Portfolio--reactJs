

const pStyle = {marginBottom: "60px"}

const sectionFStyle = { padding : "50px",  background : "#fff" , borderRadius : "200px 40px 40px 40px"  };


function Formations(){
    return (
        
        <div>
          <div className="animation-trigger" style={{marginTop:"60px"}}>
          <div className="row">
              <div className="col-md-12">
                <div className="bounce-top scroll-animation">
                  <img className="center" style={{ display: "block", width: "50%" , margin:"auto" }} alt="séparation de la page" src="pictures/competences/center-image3.png" />
                </div>
              </div>
          </div>
        </div>
          
            <section id="FormationsSection" style={sectionFStyle}>
              <div className="row ">
                <div className="col-md-12 expos">
                    <h2>
                       FORMATIONS
                    </h2>
                    <p style={pStyle}>
                    J'ai obtenu un baccalauréat en mathématiques avec mention bien, mais ai rapidement réalisé que ma véritable passion était l'informatique. J'ai donc décidé de me réorienter, validant ma première année en informatique et effectuant un stage de deux mois en tant que développeur web. Mon parcours académique et mon expérience en stage ont renforcé ma passion pour l'informatique et m'ont permis d'acquérir des compétences essentielles dans ce domaine. Je suis maintenant enthousiaste à l'idée de continuer à développer ma carrière dans le monde de la technologie.</p>
                
                    <div className="row">
                        <div className="col-md-4 " >
                          <ul className="ligne" >
                            <li>
                              <h3 >
                                  Baccalaureat Mathématiques <span> (2020-2021)</span> 
                                </h3>
                            </li>
                            <li>Cours de Mathématiques et calcul function et intégral...</li>
                            <li>Travaux pratiques en Physique , incluant des expériences en laboratoire....</li>
                            <li>Cours théoriques et travaux dirigés (TD) en génie civil...</li>
                            <li>Travaux dirigés (TD) en Chimie...</li>
                            <li>Cours de langues Français - Anglais...</li>
                          </ul>
                        </div>
                        <div className="col-md-4 " >
                          <ul className="ligne" >
                            <li>
                              <h3 >
                                  Licence 1 Sciences et technologie <span> (2021-2022)</span> 
                                </h3>
                            </li>
                            <li>Cours de Mathématiques avancées en calcul différentiel et intégral.</li>
                            <li>Travaux pratiques en Physique, incluant des expériences en laboratoire</li>
                            <li>Cours théoriques et travaux dirigés (TD) en Chimie</li>
                            <li>TD de Mathématiques pour renforcer la compréhension des concepts fondamentaux</li>
                          </ul>
                        </div>
                        <div className="col-md-4 " >
                          
                          <ul className="ligne">
                            <li>
                              <h3>
                                Bac +1 Enigma LILLE <span> (2022-2023)</span>  
                               </h3>
                            </li>
                            <li>Programme complet et diversifié en informatique et technologies numériques.</li>
                            <li>Acquisition d'une solide base de connaissances dans divers domaines informatiques.</li>
                            <li>Préparation aux défis du monde de l'informatique.</li>
                            <li>Exploration de nouvelles opportunités dans le domaine de la technologie.</li>
                          </ul>
                       
                        </div>
                        <div className="col-md-4 " >
                          
                          <ul className="ligne">
                            <li>
                                <h3>
                                   Stage en Dev Web <span> (06/2023-08/2023)</span>
                                </h3>
                            </li>
                            <li>Participation à la conception et au développement de sites web et d'applications web</li>
                            <li>Programmation en utilisant des langages de développement web tels que HTML, CSS, JavaScript, et d'autres langages pertinents.</li>
                            <li>Création et refonte de sites internet pour une expérience utilisateur optimale.</li>
                            <li> Utilisation de Photoshop et Canva pour concevoir des visuels percutants et attrayants.</li>
                            <li>Gestion des Réseaux Sociaux pour promouvoir les projets et établir des liens durables avec les utilisateurs et clients.</li>
                            <li>- Maîtrise des techniques SEO (Search Engine Optimization) pour une meilleure visibilité sur les moteurs de recherche.</li>
                            
                            <li>Objectif : créer une présence en ligne captivante et efficace en respectant les meilleures pratiques du web et en suivant les dernières tendances numériques.</li>
                          </ul>
                         
                        </div>
                        <div className="col-md-4">
                          
                          <ul >
                            <li>
                              <h3>
                                Bac +2 ENIGMA Lille <span>2023-2024</span>
                             </h3>
                            </li>
                            <li>En Cours</li>
                          </ul>
                         
                        </div>
                    </div>
             
                </div>
              </div>
            </section>

        </div>

    );
}


export default Formations ;
    