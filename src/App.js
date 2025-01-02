import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
      <Router>
          <Header />
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
