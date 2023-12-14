import "bootstrap/dist/css/bootstrap.css";
import React from "react";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0, // Index de l'élément actif
      items: [
        // Liste des éléments du carousel
        {
          id: 1,
          src: "pictures/pEtC/weather-app.png",
          caption: "weather app whith React js",
        },
        {
          id: 2,
          src: "pictures/pEtC/nextcv.png",
          caption: "CV whith Nextjs",
        },
        {
          id: 3,
          src: "pictures/pEtC/recatcv.png",
          caption: "Portfolio whith Recatjs",
        },
        {
          id: 4,
          src: "pictures/pEtC/cx1.png",
          caption: "convertisseur d-unité ",
        },
        {
          id: 5,
          src: "pictures/pEtC/cx2.png",
          caption: "convertisseur d-unité",
        },
      ],
    };
  }

  // Fonction pour passer à l'élément précédent
  prevSlide = () => {
    this.setState((prevState) => ({
      activeIndex:
        (prevState.activeIndex - 1 + prevState.items.length) %
        prevState.items.length,
    }));
  };

  // Fonction pour passer à l'élément suivant
  nextSlide = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % prevState.items.length,
    }));
  };

  render() {
    const { activeIndex, items } = this.state;
    const styles = {
      padding: "60px",
      background: "#0D0D0D",
      borderRadius: "200px 40px 40px 40px",
      marginBottom: "60px",
      boxShadow: "0px 0px 70px #fff",
      zIndex: "1",
    };
    const imgStyle = { margin: "auto", padding: "20px" };
    const H2CStyle = { textAlign: "center", marginBottom: "60px" };
    const H2zCStyle = {
      textAlign: "center",
      backgroundColor: "#fff",
      borderRadius: "60px",
      color: "#000",
    };

    return (
      <div className="">
        <div className="animation-trigger" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="bounce-top scroll-animation">
                <img
                  className="center"
                  style={{ display: "block", width: "50%", margin: "auto" }}
                  alt="séparation de la page"
                  src="pictures/pEtC/projet-web.png"
                />
              </div>
            </div>
          </div>
        </div>
        <section id="projets" style={styles} className="projets">
          <h2 style={H2CStyle}>PROJETS</h2>
          <div className="carousel">
            <div className="carousel-inner">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  }`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="d-block w-100"
                    style={imgStyle}
                  />
                  <div className="carousel-caption">
                    <h3 style={H2zCStyle}>{item.caption}</h3>
                  </div>
                </div>
              ))}
            </div>
            <i className="carousel-control-prev" onClick={this.prevSlide}>
              <span className="carousel-control-prev-icon"></span>
            </i>
            <i className="carousel-control-next " onClick={this.nextSlide}>
              <span className="carousel-control-next-icon"></span>
            </i>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
