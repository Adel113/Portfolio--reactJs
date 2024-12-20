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
                    alt="séparation de la page"
                    src="pictures/competences/center-image4.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="b" id="competencesSection" style={sectionCStyle}>
        <h2 style={H2Style}>COMPÉTENCES</h2>

        <div
          className="row imagesCompetences"
          style={{ marginBottom: "100px" }}>
          <div className="col-md-4">
            <img alt="ht-ml" src="pictures/competences/html.png" />
            <h2 style={H2Style}>HTML</h2>
          </div>
          <div className="col-md-4">
            <img alt="css" src="pictures/competences/css.png" />
            <h2 style={H2Style}>CSS</h2>
          </div>
          <div className="col-md-4">
            <img alt="js" src="pictures/competences/js.png" />
            <h2 style={H2Style}>JS</h2>
          </div>

          <div className="col-md-4">
            <img alt="react" src="pictures/competences/react.png" />
            <h2 style={H2Style}>ReactJs</h2>
          </div>
        
          <div className="col-md-4">
            <img alt="sql" src="pictures/competences/serveur-sql.png" />
            <h2 style={H2Style}>SQL</h2>
          </div>

          <div className="col-md-4">
            <img alt="git" src="pictures/competences/git..png" />
            <h2 style={H2Style}>Git</h2>
          </div>
          <div className="col-md-4">
            <img alt="github" src="pictures/coordonnees/github-logo.png" />
            <h2 style={H2Style}>GitHub</h2>
          </div>

          <div className="col-md-4">
            <img alt="wordpress" src="pictures/competences/wordpress.png" />
            <h2 style={H2Style}>Wordpress</h2>
          </div>
          <div className="col-md-4">
            <img alt="wordpress" src="pictures/competences/shopify.png" />
            <h2 style={H2Style}>Shopify</h2>
          </div>
          <div className="col-md-4">
            <img alt="java" src="pictures/competences/java.png" />
            <h2 style={H2Style}>JAVA</h2>
          </div>
          <div className="col-md-4">
            <img alt="java" src="pictures/competences/C.png" />
            <h2 style={H2Style}>C</h2>
          </div>
          
          <div className="col-md-4">
            <img alt="figma" src="pictures/competences/figma.png" />
            <h2 style={H2Style}>Figma</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Competences;
