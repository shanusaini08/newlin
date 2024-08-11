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

function App() {
  return (
    <Router basename="/newlin">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <PosterSection />
              <CategorySection id="categories"/>
              <ProductsSection id="products" />
              <ServicesSection />
              <AboutUsSection />
              <ContactUsSection />
            </>
          } />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsSection />} />
          <Route path="/services" element={<ServicesSection />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
