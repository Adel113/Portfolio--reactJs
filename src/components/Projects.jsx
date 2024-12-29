import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Helmet } from "react-helmet";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0, // Index de l'élément actif
      items: [
        {
          id: 1,
          src: "pictures/pEtC/lou.png",
          caption: "Site restaurant - WordPress",
          alt: "Projet de création d'un site pour un restaurant utilisant WordPress",
        },
        {
          id: 2,
          src: "pictures/pEtC/fitapp.png",
          caption: "Fitness App - Kotlin",
          alt: "Application mobile de fitness développée en Kotlin",
        },
        {
          id: 3,
          src: "pictures/pEtC/gta.png",
          caption: "Game GTA2 - Python",
          alt: "Jeu vidéo inspiré de GTA2, développé en Python",
        },
        {
          id: 4,
          src: "pictures/pEtC/weather-app.png",
          caption: "Weather App - React JS",
          alt: "Application météo développée en React JS",
        },
      ],
    };
  }

  prevSlide = () => {
    this.setState((prevState) => ({
      activeIndex:
        (prevState.activeIndex - 1 + prevState.items.length) %
        prevState.items.length,
    }));
  };

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
        {/* Balises SEO */}
        <Helmet>
          <title>Projets de Adel Sidi Ahmed</title>
          <meta
            name="description"
            content="Découvrez les projets de Adel Sidi Ahmed, dont des sites web, des applications mobiles et des jeux vidéo. Explorez mes réalisations et mon savoir-faire."
          />
        </Helmet>

        {/* Animation visuelle */}
        <div className="animation-trigger" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="bounce-top scroll-animation">
                <img
                  className="center"
                  style={{ display: "block", width: "50%", margin: "auto" }}
                  alt="Séparation visuelle entre les sections"
                  src="pictures/pEtC/projet-web.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section des projets */}
        <section id="projets" style={styles} className="projets">
          <h2 style={H2CStyle}>PROJETS</h2>
          <div className="carousel" aria-label="Carousel des projets">
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
                    loading="lazy"
                  />
                  <div className="carousel-caption">
                    <h3 style={H2zCStyle}>{item.caption}</h3>
                  </div>
                </div>
              ))}
            </div>
            <i
              className="carousel-control-prev"
              onClick={this.prevSlide}
              aria-label="Voir le projet précédent">
              <span className="carousel-control-prev-icon"></span>
            </i>
            <i
              className="carousel-control-next"
              onClick={this.nextSlide}
              aria-label="Voir le projet suivant">
              <span className="carousel-control-next-icon"></span>
            </i>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
