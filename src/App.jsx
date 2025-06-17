import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Home from "./Pages/Home";
import ServicePage from "./Pages/ServicePage";
import Outsourcing from "./Pages/OutSourcing";
import HRManagement from "./Pages/HrManagment";
import About from "./Pages/AboutPage";
import Contact from "./Pages/ContactPage";
import Footer from "./components/footer";


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
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
