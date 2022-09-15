import React from "react";
import { Routes, Route } from "react-router-dom";
import { All } from "../Pages/All";
import { Css } from "../Pages/Css";
import { Html } from "../Pages/Html";
import { JavaScript } from "../Pages/JavaScript";
import { Navbar } from "../Pages/Navbar";

export const AllRotes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<All />}></Route>
          <Route path="/Html" element={<Html />}></Route>
          <Route path="/Css" element={<Css />}></Route>
          <Route path="/JavaScript" element={<JavaScript />}></Route>
        </Routes>
      </div>
    </>
  );
};
