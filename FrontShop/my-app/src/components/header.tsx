/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import '@/components/header.css';

const Header: React.FC = () => {
  const getData = async () => {
    try {
      const response = await fetch("https://localhost:7026/api/Category", {
        method: "GET",
        cache: "no-store",
        mode: "no-cors",
      });
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      console.log("API is Called ", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
    <div className="nav-bar">
      <img
        src="data:image/png;base64,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"
        alt="Logo của cửa hàng"
        style={{width: "25" , height: "25"}}
        className="img-container"
      />
      <div>
      <input
        type="text"
        placeholder="Search Items..."
        className="input-search"
      />
      <Link href="/login">
        <button>Login</button>
      </Link>
      </div>
    </div>
    </>
    
    
  );
};
export default Header;
