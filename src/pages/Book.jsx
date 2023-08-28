import React from "react";
import Navbar from "../components/navbarIcon";
import { Outlet } from "react-router-dom";

export default function Book() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}
