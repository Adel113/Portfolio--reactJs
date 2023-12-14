

import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/Dashboard';
import NavMobile from './components/NavMobile';
import './style/Body.css';
import './style/Dashboard.css';
import './style/images.css';
import './style/NavbarMobile.css';
import './style/Navbar.css';

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
