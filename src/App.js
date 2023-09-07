

import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Dashboard';
import NavMobile from './NavMobile';

import './style/Body.css';
import './style/Dashboard.css';
import './style/images.css';
import './style/NavbarMobile.css';
import './style/Navbar.css';
import './style/Animations.css';






function App() {
  return (
    <div className="App">
      <div>
        <NavMobile/>
        <Dashboard/>
          
      </div>
    </div>
  );
}

export default App;
