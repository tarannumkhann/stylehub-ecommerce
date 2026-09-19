import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "../pages/Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;