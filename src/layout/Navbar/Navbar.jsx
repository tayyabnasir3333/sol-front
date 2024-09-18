import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../../store/slices/auth";
import logo from "../../assets/logo.png";
export const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <div className='navbar d-flex justify-content-between align-items-center'>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>

      <div className='d-flex justify-content-center align-items-center gap-3'>
        <div
          className='d-flex justify-content-center align-items-center'
          style={{
            backgroundColor: " #fff",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            fontSize: "14px",
          }}
        >
          <div>ADMIN</div>
        </div>
        <button onClick={handleLogout} className='button-logout p-1'>
          Logout
        </button>
      </div>
    </div>
  );
};
