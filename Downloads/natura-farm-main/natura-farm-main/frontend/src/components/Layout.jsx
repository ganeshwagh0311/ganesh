import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content grows to fill available space */}
      <main className="flex-1 w-full px-4 sm:px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
