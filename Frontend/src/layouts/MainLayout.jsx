import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MainLayout.css";

const MainLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Only redirect to login for protected routes
  const protectedRoutes = ["/chatapp", "/profile"];
  const currentPath = window.location.pathname;

  if (!token && protectedRoutes.includes(currentPath)) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
