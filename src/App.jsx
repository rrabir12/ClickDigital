import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home/Home'
import Footer from "./components/Footer";
import Contact from "./pages/QuickEnquiry/QuickEnquiry";
import Internship from "./pages/Internship/Internship";
import QuickEnquiry from "./pages/QuickEnquiry/QuickEnquiry";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quickenquiry" element={<QuickEnquiry />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
