import React from "react";
import "../../styles/Layout.css";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="Layout">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
