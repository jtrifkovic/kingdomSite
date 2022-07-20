import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Components/navbar/Navbar';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
