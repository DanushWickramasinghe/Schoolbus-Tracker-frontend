import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/commonPages/login";
import RegisterPage from "./pages/commonPages/register";
import HomePage from "./pages/commonPages/home";
import VehicleRegistrationForm from "./pages/userPages/busOwners/vehicleRegister";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/registervehicle"
            element={<VehicleRegistrationForm />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
