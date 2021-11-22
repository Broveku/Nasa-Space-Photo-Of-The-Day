import React from "react"; 
import { Routes, Route } from 'react-router-dom'

import './App.css'

import NasaAPOD from "./components/NasaAPOD/NasaAPOD";
import ParticlesBg from 'particles-bg'

function App() {


  return (
    <div>
      <NasaAPOD/>

      <ParticlesBg color={["#ffffff", "#none"]} type="cobweb" bg={true} />
    </div>
  );
}

export default App;
