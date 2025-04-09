// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarProvider } from './context/NavbarContext';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Footer from './components/Footer'; // Import Footer component

// Placeholder components for other routes
const Resume = () => <div>Resume Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    <NavbarProvider>
      <Router>
        <Routes>
          <Route
            path="/redesigned-umbrella"
            element={
              <>
                <Navbar />
                <LandingPage />
                <Projects />
                <Timeline />
                <Footer /> 
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </NavbarProvider>
  );
};

export default App;