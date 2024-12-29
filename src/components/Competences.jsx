function Competences() {
  const H2Style = { textAlign: "center", marginTop: "10px" };
  const sectionCStyle = {
    padding: "50px",
    background: "#0D0D0D",
    borderRadius: "40px 40px 40px 200px",
    boxShadow: "0px 0px 70px #fff",
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="animation-trigger">
            <div className="row">
              <div className="col-md-12">
                <div className="bounce-top scroll-animation">
                  <img
                    className="center"
                    style={{ display: "block", width: "50%", margin: "auto" }}
                    alt="séparation de la page entre les compétences"
                    src="pictures/competences/center-image4.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="b" id="competencesSection" style={sectionCStyle}>
        <h2 style={H2Style}>COMPÉTENCES EN DÉVELOPPEMENT WEB ET INFORMATIQUE</h2>

        <div className="row imagesCompetences" style={{ marginBottom: "100px" }}>
          <div className="col-md-4">
            <img
              alt="Logo HTML - langage de balisage"
              src="pictures/competences/html.png"
            />
            <h2 style={H2Style}>HTML</h2>
          </div>
          <div className="col-md-4">
            <img
              alt="Logo CSS - feuille de style"
              src="pictures/competences/css.png"
            />
            <h2 style={H2Style}>CSS</h2>
          </div>
          <div className="col-md-4">
            <img
              alt="Logo JavaScript - langage de programmation"
              src="pictures/competences/js.png"
            />
            <h2 style={H2Style}>JavaScript</h2>
          </div>

          <div className="col-md-4">
            <img
              alt="Logo React - bibliothèque JavaScript"
              src="pictures/competences/react.png"
            />
            <h2 style={H2Style}>ReactJS</h2>
          </div>
        
          <div className="col-md-4">
            <img
              alt="Logo SQL - langage de base de données"
              src="pictures/competences/serveur-sql.png"
            />
            <h2 style={H2Style}>SQL</h2>
          </div>

          <div className="col-md-4">
            <img
              alt="Logo Git - gestion de version"
              src="pictures/competences/git..png"
            />
            <h2 style={H2Style}>Git</h2>
          </div>
          <div className="col-md-4">
            <img
              alt="Logo GitHub - plateforme de partage de code"
              src="pictures/coordonnees/github-logo.png"
            />
            <h2 style={H2Style}>GitHub</h2>
          </div>

          <div className="col-md-4">
            <img
              alt="Logo WordPress - gestion de contenu"
              src="pictures/competences/wordpress.png"
            />
            <h2 style={H2Style}>WordPress</h2>
          </div>
          <div className="col-md-4">
            <img
              alt="Logo Shopify - plateforme de commerce en ligne"
              src="pictures/competences/shopify.png"
            />
            <h2 style={H2Style}>Shopify</h2>
          </div>
          <div className="col-md-4">
            <img
              alt="Logo Java - langage de programmation"
              src="pictures/competences/java.png"
            />
            <h2 style={H2Style}>Java</h2>
          </div>
          <div className="col-md-4">
            <img
              alt="Logo C - langage de programmation"
              src="pictures/competences/C.png"
            />
            <h2 style={H2Style}>C</h2>
          </div>
          
          <div className="col-md-4">
            <img
              alt="Logo Figma - outil de design"
              src="pictures/competences/figma.png"
            />
            <h2 style={H2Style}>Figma</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Competences;
