import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Re-trigger animations when route changes
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div className="bg-[#fdfaf7] text-on-surface font-body-md antialiased min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}