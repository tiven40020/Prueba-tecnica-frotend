import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function MainLayout() {
  return (
    <div className="dashboard-grid">
      <Navbar />
      <Sidebar />
      <main className="content-area">
        <Outlet /> 
      </main>
    </div>
  );
}

export{MainLayout};