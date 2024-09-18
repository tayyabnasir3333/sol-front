import React, { useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router";
import { SideBar } from "./Sidebar/SideBar";
import { Navbar } from "./Navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <>
        <SideBar />
        <Outlet />
      </>
    </>
  );
}

export default Layout;
