function Coordonnees() {
  const sectioncStyle = {
    padding: "50px",
    textAlign: "center",
    background: "#0D0D0D",
    borderRadius: "200px 40px 40px 40px",
    boxShadow: "0px 0px 70px #fff",
  };
  const sectionqStyle = {
    background: "#0D0D0D",
    borderRadius: "40px 40px 40px 200px",
    boxShadow: "0px 0px 70px #fff",
  };
  const cooStyle = { marginBottom: "60px" };
  const headingStyle = { textAlign: "center", fontSize: "25px" };
  const imgStyle = { marginBottom: "60px", borderRradius: "80px" };

  return (
    <div>
      <section id="QuiSuisJeSection" style={sectionqStyle}>
        <h1 className="titre bounce-top">Bienvenus à mon portfolio</h1>
        <div className="row">
          <div className="col-md-4">
            <img
              className="avatar"
              alt="portrait adel "
              src="pictures/coordonnees/ADELCV.PNG"
              style={imgStyle}
            />
          </div>
          <div className="col-md-8">
            <h2 className="name">ADEL SIDI AHMED</h2>
            <p className="presentation">
              Je suis Adel Sidi Ahmed, un étudiant de 20 ans en deuxième année à
              l'ENIGMA SCHOOL à Lille. Passionné par l'informatique depuis
              toujours, j'ai exploré divers domaines tels que la programmation,
              la sécurité informatique et l'infographie au cours de ma première
              année. Cependant, c'est le développement web et le design
              front-end qui ont captivé mon intérêt. Maîtrisant HTML, CSS,
              JavaScript ainsi que des frameworks comme React et Vue.js, je
              trouve une satisfaction particulière à créer des interfaces
              esthétiques et intuitives. Mon portfolio reflète mon parcours, mes
              compétences et mes projets dans le domaine du développement web.
              J'ai hâte de partager mon travail et d'explorer de nouvelles
              opportunités de collaboration.
            </p>
            <i className="bi bi-envelope-at-fill"></i>
          </div>
        </div>
      </section>
      <div className="animation-trigger" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="bounce-top scroll-animation">
              <img
                className="center"
                style={{ display: "block", width: "50%", margin: "auto" }}
                alt="séparation de la page"
                src="pictures/competences/center-image2.png"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="a" id="CoordonnéesSection" style={sectioncStyle}>
        <h2 style={cooStyle}>COORDONNÉES</h2>
        <div className="row coordonnees">
          <div className="col-md-4 col">
            <img
              alt="localisation"
              src="pictures/coordonnees/source-locale.png"
            />
            <h2 style={headingStyle}>
              <a href="https://www.google.com/maps/place/59155+Faches-Thumesnil/@50.5955681,3.0713515,14z/data=!3m1!4b1!4m6!3m5!1s0x47c2d4356fdfaf7b:0x1c0af141f1250070!8m2!3d50.5948385!4d3.0735552!16s%2Fg%2F1tcwq8xs?entry=ttu">
                Lille,59155
              </a>
            </h2>
          </div>
          <div className="col-md-4 col">
            <img alt="mail" src="pictures/coordonnees/gmail.png" />
            <h2 style={headingStyle}>
              <a className="mail" href="mailto:adelsidiahmed2020@gmail.com">
                adelsidiahmed2020@gmail.com
              </a>
            </h2>
          </div>
          <div className="col-md-4 col">
            <img alt="numéro" src="pictures/coordonnees/telephone.png" />
            <h2 style={headingStyle}>
              <a href="tel:+33761535757">0761535757</a>
            </h2>
          </div>
          <div className="col-md-4 col">
            <img alt="github" src="pictures/coordonnees/github-logo.png" />
            <h2 style={headingStyle}>
              <a href="https://github.com/Adel113">Adel113</a>
            </h2>
          </div>
          <div className="col-md-4 col">
            <img alt="linkedin" src="pictures/coordonnees/linkedin.png" />
            <h2 style={headingStyle}>
              <a href="https://www.linkedin.com/in/adel-sidi-ahmed/">
                Adel SIDI AHMED
              </a>
            </h2>
          </div>
          <div className="col-md-4 col">
            <img alt="age" src="pictures/coordonnees/joyeux-anniversaire.png" />
            <h2 style={headingStyle}>
              <a href="20">20 ans</a>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Coordonnees;
