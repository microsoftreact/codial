import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Computer from "./pages/computer/Computer";
import Frontend from "./pages/frontend/Frontend";
import Footer from "./components/footer/Footer";
import Android from "./pages/android/Android";
import Backend from "./pages/backend/Backend";
import Designer from "./pages/designer/Designer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/android" element={<Android />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/designer" element={<Designer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
