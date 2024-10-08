// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PosterSection from './components/PosterSection/PosterSection';
import CategorySection from './components/CategorySection/CategorySection';
import ProductsSection from './components/ProductsSection/ProductsSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import ContactUsSection from './components/ContactUsSection/ContactUsSection';
import FooterSection from './components/FooterSection/FooterSection';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import ProductsPage from './pages/Products/ProductsPage';
import Gallery from './pages/gallery/Gallery';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import './App.css';

function App() {
  return (
    <Router basename="/newlin">
      <div className="App">
        <Navbar />
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Routes>
          <Route path="/" element={
            <>
              <PosterSection />
              <CategorySection id="categories" />
              <ProductsSection />
              <ServicesSection />
              <AboutUsSection />
              <ContactUsSection />
            </>
          } />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<div className="page-padding"><ContactUsSection /></div>} />
          <Route path="/services" element={<div className="page-padding"><ServicesSection /></div>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
