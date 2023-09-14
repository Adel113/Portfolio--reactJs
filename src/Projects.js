import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0, // Index de l'élément actif
      items: [        // Liste des éléments du carousel
        {
          id: 1,
          src: 'pictures/competences/html.png',
          alt: 'Image 1',
          caption: 'Image 1 Caption',
        },
        {
          id: 2,
          src: 'pictures/competences/html.png',
          alt: 'Image 2',
          caption: 'pictures/competences/html.png',
        },
        {
          id: 3,
          src: 'pictures/competences/ccna.png',
          alt: 'Image 3',
          caption: 'Image 3 Caption',
        },
      ],
    };
  }

  // Fonction pour passer à l'élément précédent
  prevSlide = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex - 1 + prevState.items.length) % prevState.items.length,
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
    const styles = {marginTop : "60px" , background: "#0D0D0D" , borderRadius: "200px 40px 40px 40px" , marginBottom: "60px" ,  boxShadow: "0px 0px 70px #fff"};
    const imgStyle = {margin : "auto", padding : "20px"};
  

    return (
      
      <div className="carousel" style={styles}>
        
        
        <div className="carousel-inner">
        
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={item.src} alt={item.alt} className="d-block w-50"  style={imgStyle}/>
              <div className="carousel-caption">
                <h3>{item.caption}</h3>
              </div>
            </div>
          ))}
        </div>
        <i className="carousel-control-prev" onClick={this.prevSlide}>
          <span  className="carousel-control-prev-icon"></span>
        </i>
        <i className="carousel-control-next " onClick={this.nextSlide} >
          <span className="carousel-control-next-icon"></span>
        </i>
      </div>
    );
  }
}

export default Projects;

