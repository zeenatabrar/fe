import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactManagement from './components/ContactManagement';
import AppointmentScheduling from './components/AppointmentScheduling.js';
import Navbar from './Navbar.jsx';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactManagement />} />
          <Route path="/appointment" element={<AppointmentScheduling />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;