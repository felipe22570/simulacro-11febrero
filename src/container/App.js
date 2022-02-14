import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Datos from "../components/Datos";
import Formulario from "../components/Formulario";

import Navbar from "../components/Navbar";
import "../styles/app.css";

const App = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Formulario />} />
            <Route path="/datos" element={<Datos />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
