import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import "./App.css";

import authService from "./appwrite/auth";

import { login, logout } from "./store/authSlice";

import { Header, Footer } from "./components";

import { Outlet } from "react-router-dom";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  // this process is correct for create-react app

  // console.log(import.meta.env.VITE_APPWRITE_URL)
  //as or application is in Vite

  //jaise hi app load hota hai to check ki user login hai ya nhi

  //loading state ->> kyunki time lagega to better option

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false)); //ye run hota hi hota hai
  });
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-green-400">
      <div className="w-full block text-center">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
