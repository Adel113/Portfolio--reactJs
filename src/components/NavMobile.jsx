

import { scrollToElement } from './Navbar';

function NavMobile() {
  return (
    <div className="nav-mobile">
        <ul>
           <li onClick={() => scrollToElement('QuiSuisJeSection')}>    
               <img alt="qsj" src="pictures/navmobile/quisuisje.png" />
           </li>
           <li onClick={() => scrollToElement('CoordonnéesSection')} >   
               <img alt="sl" src="pictures/coordonnees/source-locale.png" />
           </li>
           <li onClick={() => scrollToElement('competencesSection')}>  
               <img alt="c" src="pictures/navmobile/competences.png" />
           </li>
           <li onClick={() => scrollToElement('FormationsSection')}>   
               <img alt="f" src="pictures/navmobile/formations.png" />  
           </li>
           <li onClick={() => scrollToElement('ExperiencesSections')}>
               <img alt="ep" src="pictures/navmobile/experiences.png" />
           </li>
           <li onClick={() => scrollToElement('projets')}>
               <img alt="ep" src="pictures/navmobile/prj.png" />
           </li>
           <li onClick={() => scrollToElement('Certifications')}>
               <img alt="ep" src="pictures/navmobile/crt.png" />
           </li>
        </ul>
    </div>
  );
}

export default NavMobile;
