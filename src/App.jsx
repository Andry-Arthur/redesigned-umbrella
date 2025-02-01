// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

// Placeholder components for other routes
const Resume = () => <div>Resume Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Combine LandingPage and Projects on the same route */}
        <Route
          path="/redesigned-umbrella"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Projects />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;