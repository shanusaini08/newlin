import React from 'react';
import './AboutUsSection.css';
import aboutUsImage from '../../assets/aboutus/2.jpg';

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
          <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <div className="about-us-text">
          <p className="about-us-description">
            At NEWLIN, we offer premium quality linens designed to elevate your living spaces. Our wide selection includes bedsheets, towels, duvets, and cushions, available in various sizes and colors. Each product is crafted for durability, comfort, and style, adding a touch of elegance to any home or hotel. We prioritize your satisfaction and make shopping convenient with in-store visits and online ordering for home delivery. Choose NEWLIN for luxurious linens that transform your spaces.
          </p>
          <p className="about-us-description">
            At NEWLIN, we believe that every space deserves a touch of luxury. That's why we curate a premium selection of exquisite linens designed to elevate your home or hotel experience. From sumptuous bedsheets and plush towels to elegant runners, cozy duvets, and stylish cushions, our collection is crafted with the finest materials and meticulous attention to detail. Available in a variety of sizes and colors, our linens blend superior comfort with timeless style, transforming any room into a sanctuary of relaxation.
          </p>
          <p className="about-us-description">
            Join us in redefining comfort and sophistication with NEWLIN's exceptional linen collection.
          </p>
        </div>
        <div className="about-us-image">
          <img src={aboutUsImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
