import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Home from "./Pages/Home";
import ServicePage from "./Pages/ServicePage";
import Outsourcing from "./Pages/OutSourcing";


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/services/outsourcing" element={<Outsourcing />} />
        {/* <Route path="/services/hr-management" element={<HRManagement />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
