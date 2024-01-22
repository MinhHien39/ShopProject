"use client";
import React, { useState, useEffect } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    console.log("Login Successfully");
  };
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-center font-semibold text-gray-800">Đăng nhập</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700">
              Tên người dùng
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none rounded-lg border-gray-300 shadow-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-lg border-gray-300 shadow-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-sm"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
