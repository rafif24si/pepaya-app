import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    // Class pembungkus ini sekarang 100% sama dengan tag <body> di HTML asli kamu
    <div className="bg-surface text-on-surface font-body-md antialiased pt-24 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}