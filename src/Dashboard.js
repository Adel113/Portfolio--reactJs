import DashboardApp from './DashboardApp';
import Navbar from './Navbar';


function Dashboard() {
    return (
      <div className="dashboard">
        <div>
         <Navbar />
         <DashboardApp/>
        </div>
      </div>
    );
  }
  
  export default Dashboard;