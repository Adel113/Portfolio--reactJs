import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Portfolio de Adel Sidi Ahmed - Développeur Web</title>
        <meta name="google-site-verification" content="dT_JdRqknP05Mqh2hmahML7cPsVOpF2qcF3Ln_T1wcQ" />
        <meta name="description" content="Portfolio de Adel Sidi Ahmed, développeur spécialisé en React, Tailwind CSS et C++. Découvrez mes projets et expériences." />
        <meta name="keywords" content="Adel Sidi Ahmed, Portfolio, Développeur Web, React, Tailwind CSS" />
        <meta name="author" content="Adel Sidi Ahmed" />
      </Helmet>
      <NavMobile />
      <Dashboard />
    </div>
  );
}

export default App;
