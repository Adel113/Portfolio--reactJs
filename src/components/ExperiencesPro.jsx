const sectionEStyle = {
  padding: "50px",
  background: "#0D0D0D",
  borderRadius: "40px 40px 40px 200px",
  boxShadow: "0px 0px 70px #fff",
};

function ExperienceCard({ title, date, description }) {
  return (
    <div className="col-md-4">
      <ul className="ligne">
        <li>
          <h3>{title} <span>({date})</span></h3>
        </li>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperiencesPro() {
  const experiences = [
    {
      title: "Stage en Dev full stack",
      date: "05/2024-07/2024",
      description: [
        "Conception et développement d’un site web pour un restaurant avec WordPress, PHP et ReactJS.",
        "Création de maquettes interactives pour améliorer l’interface utilisateur et optimiser l’expérience client.",
        "Intégration de fonctionnalités dynamiques et gestion des contenus via un CMS personnalisé.",
        "Création de visuels attractifs pour le site en utilisant des outils comme Photoshop et Canva.",
        "Optimisation des performances et SEO pour garantir une meilleure visibilité en ligne du restaurant.",
        "Gestion des réseaux sociaux pour promouvoir les services et fidéliser les clients locaux.",
        "Objectif : proposer une solution moderne et performante répondant aux besoins numériques du client."
      ]
    },
    {
      title: "Stage en Dev Web",
      date: "06/2023-08/2023",
      description: [
        "Participation à la conception et au développement de sites web et d'applications web.",
        "Programmation en utilisant des langages de développement web tels que HTML, CSS, JavaScript, et d'autres langages pertinents.",
        "Création et refonte de sites internet pour une expérience utilisateur optimale.",
        "Utilisation de Photoshop et Canva pour concevoir des visuels percutants et attrayants.",
        "Gestion des Réseaux Sociaux pour promouvoir les projets et établir des liens durables avec les utilisateurs et clients.",
        "Maîtrise des techniques SEO (Search Engine Optimization) pour une meilleure visibilité sur les moteurs de recherche.",
        "Objectif : créer une présence en ligne captivante et efficace en respectant les meilleures pratiques du web et en suivant les dernières tendances numériques."
      ]
    },
    {
      title: "Employé Polyvalent en Restaurant Pizzeria",
      date: "08/2023-08/2023",
      description: [
        "Prise de commandes des clients, traitement des réservations et fourniture de recommandations de menu.",
        "Préparation et service des plats, y compris la préparation de pizzas, de pâtes et d'autres spécialités.",
        "Gestion des transactions financières, y compris l'encaissement et la manipulation des paiements.",
        "Entretien des normes d'hygiène alimentaire, de propreté et de sécurité dans la salle à manger et la cuisine."
      ]
    },
    {
      title: "Graphiste designer",
      date: "2018-2022",
      description: [
        "Création de maquettes attrayantes pour des panneaux publicitaires imprimés et numériques, en collaboration avec des clients pour répondre à leurs besoins de communication.",
        "Conception de cartes de visite professionnelles et mémorables pour les clients du magasin et d'autres entreprises locales.",
        "Maîtrise de logiciels de retouche d'image, tels que Adobe Photoshop, pour améliorer la qualité des photos utilisées dans les campagnes marketing et publicitaires.",
        "Collaboration avec des agences de publicité ou des clients directs pour fournir des services de conception graphique de haute qualité."
      ]
    },
    {
      title: "Spécialiste du flockage",
      date: "2018-2022",
      description: [
        "Réalisation de travaux de flockage sur une variété de supports, y compris t-shirts, casquettes, sacs, etc.",
        "Utilisation de techniques avancées de flockage pour créer des designs personnalisés et de haute qualité.",
        "Gestion des commandes de flockage, y compris la coordination de la conception avec les clients, le choix des matériaux et l'exécution de la production.",
        "Connaissance approfondie des techniques de pressage à chaud, des machines de flockage et des matériaux."
      ]
    },
    {
      title: "Propriétaire d'un Magasin de Crêpes et Glaces",
      date: "2019-2022",
      description: [
        "Gestion complète du magasin, y compris la supervision du personnel, la gestion des opérations quotidiennes, la planification des horaires et la gestion des stocks.",
        "Création et mise en œuvre de stratégies de marketing pour attirer de nouveaux clients et fidéliser la clientèle existante.",
        "Gestion des finances, y compris la budgétisation, la comptabilité et la gestion des coûts.",
        "Maintien des normes d'hygiène et de sécurité alimentaire pour garantir la satisfaction des clients."
      ]
    },
    {
      title: "Entraîneur de Vo-Vietnam",
      date: "2018-2022",
      description: [
        "Enseignement des techniques de Vo-Vietnam à des élèves de tous âges et niveaux de compétence.",
        "Organisation et supervision d'entraînements réguliers pour améliorer la force, la souplesse, la coordination et les compétences en autodéfense des élèves.",
        "Préparation des élèves pour des compétitions locales, nationales ou internationales, le cas échéant.",
        "Mise en place de programmes de formation personnalisés pour les élèves et suivi de leur progression."
      ]
    }
  ];

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
        <div className="row">
          <div className="col-md-12 expos">
            <h2>EXPÉRIENCES PROFESSIONNELLES</h2>
            <h2>EXPÉRIENCES PROFESSIONNELLES</h2>
            
            <div className="row">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  title={experience.title}
                  date={experience.date}
                  description={experience.description}
                />
              ))}
            </div>
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
