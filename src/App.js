import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from './Pages/Home/Home'
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services"

// COMPONENTS 
import Navbar from './Components/navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
