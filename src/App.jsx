import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ServicePage from "./Pages/ServicePage";
import Outsourcing from "./Pages/OutSourcing";
import HRManagement from "./Pages/HrManagment";
import About from "./Pages/AboutPage";
import Contact from "./Pages/ContactPage";
import Footer from "./components/footer";
import Nav from "./components/Nav";


export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services/outsourcing" element={<Outsourcing />} />
        <Route path="/services/hr-management" element={<HRManagement />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
