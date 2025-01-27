// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

// Placeholder components for other routes
const Projects = () => <div>Projects Page</div>;
const Resume = () => <div>Resume Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/redesigned-umbrella" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;