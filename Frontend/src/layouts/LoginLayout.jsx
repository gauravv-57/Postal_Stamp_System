import React from "react";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default LoginLayout;
