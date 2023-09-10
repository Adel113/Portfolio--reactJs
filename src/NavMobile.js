

import { scrollToElement } from './Navbar';








function NavMobile() {
  return (
    <div className="nav-mobile">
        <ul>
           <li onClick={() => scrollToElement('QuiSuisJeSection')}>
               
               <img alt="linkedin" src="pictures/navmobile/quisuisje.png" />
           </li>
           <li onClick={() => scrollToElement('CoordonnéesSection')} >
               
               <img alt="linkedin" src="pictures/coordonnees/source-locale.png" />
           </li>
           <li onClick={() => scrollToElement('competencesSection')}>
               
               <img alt="linkedin" src="pictures/navmobile/competences.png" />
           </li>
           <li onClick={() => scrollToElement('FormationsSection')}>
               
               <img alt="linkedin" src="pictures/navmobile/formations.png" />  
           </li>
           <li onClick={() => scrollToElement('ExperiencesSections')}>
               <img alt="linkedin" src="pictures/navmobile/experiences.png" />
           </li>
        </ul>
    </div>
  );
}

export default NavMobile;
