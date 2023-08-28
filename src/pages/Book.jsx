import React from "react";
import Narbar from "../components/narbarIcon";
import { Outlet } from "react-router-dom";

export default function Book() {
  return (
    <div className="container">
      <Narbar />
      <Outlet />
    </div>
  );
}
