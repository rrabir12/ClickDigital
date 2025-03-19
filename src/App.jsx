import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import CoreFeature from "./pages/CoreFeature/CoreFeature";
import PartnerCompany from "./pages/PartnerCompany.jsx/PartnerCompany";
import Teams from "./pages/Teams/Teams";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <CoreFeature />
      <PartnerCompany />
      <Teams />
    </>
  );
}

export default App;
