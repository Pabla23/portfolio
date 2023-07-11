import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MainPage from './main/MainPage';
import Footer from './Footer';
import ProjectPage from './single/ProjectPage';

function AppRouter() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;