import React from 'react';
import './AboutUsPage.css';
import aboutUsImage from '../../assets/aboutus/2.jpg';

const AboutUsPage = () => {
  return (
    <section className="about-us-page">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <div className="about-us-text">
          <p className="about-us-description">
            Welcome to NEWLIN! ✌ At NEWLIN, we believe that every space deserves a touch of luxury. That's why we curate a premium selection of exquisite linens designed to elevate your home or hotel experience. From sumptuous bedsheets and plush towels to elegant runners, cozy duvets, and stylish cushions, our collection is crafted with the finest materials and meticulous attention to detail. Available in a variety of sizes and colors, our linens blend superior comfort with timeless style, transforming any room into a sanctuary of relaxation.
          </p>
          <p className="about-us-description">
            Join us in redefining comfort and sophistication with NEWLIN's exceptional linen collection.
          </p>
          <p className="about-us-description">
            Best Regards, <br /> Team NEWLIN
          </p>
        </div>
        <div className="about-us-image">
          <img src={aboutUsImage} alt="About Us" />
        </div>
      </div>
      
      <div className="why-us-section">
        <h1>Why Us?</h1>
        <div className="why-us-content">
          <div className="why-us-text">
            <p className="about-us-description">
              At NEWLIN, we offer premium quality linens designed to elevate your living spaces. Our wide selection includes bedsheets, towels, duvets, and cushions, available in various sizes and colors. Each product is crafted for durability, comfort, and style, adding a touch of elegance to any home or hotel. We prioritize your satisfaction and make shopping convenient with in-store visits and online ordering for home delivery. Choose NEWLIN for luxurious linens that transform your spaces.
            </p>
            <p className="about-us-description">
              Premium Quality: Our linens are crafted from high-quality materials to ensure durability, comfort, and style.
            </p>
            <p className="about-us-description">
              Wide Selection: From bedsheets and towels to duvets and cushions, we provide a variety of products in different sizes and colors to suit your needs.
            </p>
            <p className="about-us-description">
              Elegant Design: Our products add a touch of elegance to any space, enhancing both home and hotel environments.
            </p>
            <p className="about-us-description">
              Customer Satisfaction: We prioritize your comfort and satisfaction, offering luxurious linens that are both functional and aesthetically pleasing.
            </p>
            <p className="about-us-description">
              Convenient Shopping: Visit us in-store or order online for home delivery, making it easy to enjoy our products wherever you are.
            </p>
            <p className="about-us-description">
              Choose NEWLIN for a blend of luxury, quality, and convenience that transforms your living spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
