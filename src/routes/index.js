import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import LoginProvider from "../context/LoginProvider";
import UsersProvider from "../context/UsersProvider";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Layout from "./Layout";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <UsersProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="dashboard"
                element={
                  <PrivateRoute redirect="/" component={<DashBoard />} />
                }
              />
            </Route>
          </Routes>
        </UsersProvider>
      </LoginProvider>
    </BrowserRouter>
  );
};

export default RoutesApp;
