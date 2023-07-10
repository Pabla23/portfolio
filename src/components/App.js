import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer';
import Project from './single/Project';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:slug" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;