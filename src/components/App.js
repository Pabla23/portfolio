import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';
import Project from './single/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} /> {/* Route for the main component */}
          <Route path="/project/:slug" element={<Project />} /> {/* Route for the single project component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;