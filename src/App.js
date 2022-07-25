import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from './Pages/Home/Home'
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services"

// COMPONENTS 
import Navbar from './Components/navbar/Navbar';
import ScrollToTop from './Components/ScrollToTop';


function App() {
 
  return (
    <Router>
      <ScrollToTop>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
