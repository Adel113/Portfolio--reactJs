import App from "./App";

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Fonction pour ajouter la classe "bounce-top" si l'élément est visible
  function animateOnScroll() {
    var element = document.querySelector('.animation-trigger');
    if (isElementInViewport(element)) {
      element.classList.add('bounce-top');
    }
  }
  
  // Écouteur d'événement pour déclencher l'animation lorsque l'utilisateur fait défiler
  window.addEventListener('scroll', animateOnScroll);