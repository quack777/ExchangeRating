import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import "./styles/common.css";
import "./styles/reset.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
