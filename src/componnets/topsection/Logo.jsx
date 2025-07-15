// src/components/Logo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
// import style from "@/styles/top/header.module.css"; // Adjust path if not using alias
import logo from '../../assets/images/logo.png'

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={handleClick}>
      <img
        className="h-8 w-auto"
        width={100}
        height={100}
        src={logo}
        alt="Code4Coder Logo"
      />
      <span style={{ fontSize: "20px", fontWeight: "bold",marginLeft:"5px" , color:"orange" }}>Code4Coder</span>
    </div>
  );
};

export default Logo;
