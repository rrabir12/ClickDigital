import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home/Home'
import Footer from "./components/Footer";
import Internship from "./pages/Internship/Internship";
import Process from './pages/Process/Process'
import QuickEnquiry from "./pages/QuickEnquiry/QuickEnquiry";
import Services from "./pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quickenquiry" element={<QuickEnquiry />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/process" element={<Process />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
