

import { scrollToCoordonnees } from './Navbar';
import { scrollToCompetences } from './Navbar';
import { scrollToExperiences } from './Navbar';
import { scrollToFormations } from './Navbar';
import { scroolToQuiSuisJe } from './Navbar';








function NavMobile() {
  return (
    <div className="nav-mobile">
        <ul>
           <li onClick={scroolToQuiSuisJe}>
               
               <img alt="linkedin" src="pictures/navmobile/quisuisje.png" />
           </li>
           <li onClick={scrollToCoordonnees} >
               
               <img alt="linkedin" src="pictures/coordonnees/source-locale.png" />
           </li>
           <li onClick={scrollToCompetences}>
               
               <img alt="linkedin" src="pictures/navmobile/competences.png" />
           </li>
           <li onClick={scrollToFormations}>
               
               <img alt="linkedin" src="pictures/navmobile/formations.png" />  
           </li>
           <li onClick={scrollToExperiences}>
               <img alt="linkedin" src="pictures/navmobile/experiences.png" />
           </li>
        </ul>
    </div>
  );
}

export default NavMobile;
