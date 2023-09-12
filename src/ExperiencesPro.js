
const Pstyle = {marginBottom: "60px" , border: "4px solid black", borderRadius: "40px", padding: "10px"};

const estyle = {color: "red"};
const sectionEStyle = { padding : "50px",  background : "#0D0D0D" , borderRadius : "40px 40px 40px 200px" ,  boxShadow: "0px 0px 70px #fff"};



function ExperiencesPro (){
    return (
      <div>
        <div className="animation-trigger" style={{marginTop:"60px"}}>
          <div className="row">
              <div className="col-md-12">
                <div className="bounce-top scroll-animation">
                  <img className="center" style={{ display: "block", width: "50%" , margin:"auto" }} alt="séparation de la page" src="pictures/competences/center-image5.png" />
                </div>
              </div>
          </div>
        </div>

        <section id="ExperiencesSections" style={sectionEStyle}>
          <div className="row "  >
            <div className="col-md-12 expos">
              <h2>
              <span style={estyle}>E</span>XPÉRIENCES PROFISSIONNELLES
              </h2>
              <p style={Pstyle}>
              Ces différentes expériences professionnelles témoignent de ma polyvalence, de ma capacité à m'adapter à différents domaines et de mon engagement à acquérir de nouvelles compétences pour exceller dans chaque rôle. En tant qu'entraîneur de Vo-Vietnam, j'ai développé des compétences en communication et en enseignement. En tant que propriétaire d'un magasin de crêpes et glaces, j'ai acquis une expérience solide en gestion d'entreprise. Mon rôle en tant que spécialiste du flockage m'a permis de perfectionner mon attention aux détails et mon expertise technique en matière de revêtements. En tant que graphiste designer, j'ai su donner vie à des idées créatives grâce à des outils numériques. Enfin, mon expérience en tant qu'employé polyvalent en restaurant pizzeria démontre ma capacité à travailler dans le secteur de la restauration avec succès.
              </p>
             
              <div className="row">
                <div className="col-md-4">
                  
                  <ul className="ligne">
                    <li>
                      <h3 >
                         Employé Polyvalent en Restaurant Pizzeria<span> (08/2023-à ce jour)</span>
                      </h3>
                    </li>
                    <li>Prise de commandes des clients, traitement des réservations et fourniture de recommandations de menu</li>
                    <li>Préparation et service des plats, y compris la préparation de pizzas, de pâtes et d'autres spécialités.</li>
                    <li>Gestion des transactions financières, y compris l'encaissement et la manipulation des paiements.</li>
                    <li>Entretien des normes d'hygiène alimentaire, de propreté et de sécurité dans la salle à manger et la cuisine.</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  
                  <ul className="ligne">
                    <li>
                      <h3 >
                        Graphiste designer<span> (2018-2022)</span>
                      </h3>
                    </li>
                    <li>Création de maquettes attrayantes pour des panneaux publicitaires imprimés et numériques, en collaboration avec des clients pour répondre à leurs besoins de communication.</li>
                    <li>Conception de cartes de visite professionnelles et mémorables pour les clients du magasin et d'autres entreprises locales.</li>
                    <li>Maîtrise de logiciels de retouche d'image, tels que Adobe Photoshop, pour améliorer la qualité des photos utilisées dans les campagnes marketing et publicitaires.</li>
                    <li>Collaboration avec des agences de publicité ou des clients directs pour fournir des services de conception graphique de haute qualité.</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  
                  <ul className="ligne">
                    <li>
                      <h3 >
                        spécialiste du flockage<span> (2018-2022)</span>
                      </h3>
                    </li>
                    <li>Réalisation de travaux de flockage sur une variété de supports, y compris t-shirts, casquettes, sacs, etc.</li>
                    <li>Utilisation de techniques avancées de flockage pour créer des designs personnalisés et de haute qualité.</li>
                    <li>Gestion des commandes de flockage, y compris la coordination de la conception avec les clients, le choix des matériaux et l'exécution de la production.</li>
                    <li>Connaissance approfondie des techniques de pressage à chaud, des machines de flockage et des matériaux.</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  
                  <ul className="ligne">
                    <li>
                      <h3>
                       Propriétaire d'un Magasin de Crêpes et Glaces <span> 2019-2022</span>
                      </h3>
                    </li>
                    <li>Gestion complète du magasin, y compris la supervision du personnel, la gestion des opérations quotidiennes, la planification des horaires et la gestion des stocks.</li>
                    <li>Création et mise en œuvre de stratégies de marketing pour attirer de nouveaux clients et fidéliser la clientèle existante.</li>
                    <li>Gestion des finances, y compris la budgétisation, la comptabilité et la gestion des coûts.</li>
                    <li>Maintien des normes d'hygiène et de sécurité alimentaire pour garantir la satisfaction des clients.</li>
                  </ul>
                 
                </div>
                <div className="col-md-4">
                  
                  <ul className="ligne">
                    <li>
                      <h3>
                       Entraîneur de Vo-Vietnam<span> 2018-2022</span>
                      </h3>
                    </li>
                    <li>Enseignement des techniques de Vo-Vietnam à des élèves de tous âges et niveaux de compétence.</li>
                    <li>Organisation et supervision d'entraînements réguliers pour améliorer la force, la souplesse, la coordination et les compétences en autodéfense des élèves.</li>
                    <li>Préparation des élèves pour des compétitions locales, nationales ou internationales, le cas échéant.</li>
                    <li>Mise en place de programmes de formation personnalisés pour les élèves et suivi de leur progression.</li>
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