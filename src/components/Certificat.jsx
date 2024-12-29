const H2CStyle = { textAlign: "center", marginTop: "10px", marginBottom: "60px" };
const styleh3 = { textAlign: "center", marginTop: "50px" };
const sectionCStyle = {
  padding: "50px",
  background: "#0D0D0D",
  borderRadius: "40px 40px 40px 200px",
  boxShadow: "0px 0px 70px #fff",
  marginBottom: "100px",
};

function Certificat() {
  return (
    <div>
      <div className="animation-trigger" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="bounce-top scroll-animation">
              <img
                className="center"
                style={{ display: "block", width: "50%", margin: "auto" }}
                alt="Séparation de la page des certifications"
                src="pictures/pEtC/crte.png"
              />
            </div>
          </div>
        </div>
      </div>
      <section id="Certifications" style={sectionCStyle} className="Certificat">
        <h2 style={H2CStyle}>CERTIFICATIONS</h2>
        <div className="imgcrt">
          <div className="crt">
            <img
              alt="Certificat Stage Développement Web"
              src="pictures/pEtC/stage.png"
            />
            <h3 style={styleh3}>STAGE DEV-WEB</h3>
          </div>
          <div className="crt">
            <img
              alt="Certificat CCNA1 - Cisco"
              src="pictures/pEtC/ccna1.png"
            />
            <h3 style={styleh3}>CCNA1</h3>
          </div>
          <div className="crt">
            <img
              alt="Certificat CCNA2 - Cisco"
              src="pictures/pEtC/ccna2.png"
            />
            <h3 style={styleh3}>CCNA2</h3>
          </div>
          <div className="crt">
            <img
              alt="Certificat CCNA3 - Cisco"
              src="pictures/pEtC/ccna3.png"
            />
            <h3 style={styleh3}>CCNA3</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certificat;
