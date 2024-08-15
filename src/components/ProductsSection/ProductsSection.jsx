import React, { useState, useEffect } from 'react';
import './ProductsSection.css';
import img1 from '../../assets/Products/22.jpg';
import img2 from '../../assets/Products/3.jpg';
import img3 from '../../assets/Products/6.jpg';
import img4 from '../../assets/Products/1.webp';
import img5 from '../../assets/Products/3.webp';
import img6 from '../../assets/Products/4.jpg';
import img7 from '../../assets/Products/9.jpeg';
import img8 from '../../assets/Products/7.jpeg';
import img9 from '../../assets/Products/1.jpg'; // Mattress Protector
import img10 from '../../assets/Products/5.jpg'; // Bath Mat
import img11 from '../../assets/Products/2.jpg'; // Curtains

const products = [
  { title: 'Bedsheets', description: 'White or colored, in double and single sizes.', img: img1 },
  { title: 'Towels', description: 'Hand and bath towels for ultimate comfort.', img: img2 },
  { title: 'Runners', description: 'Available in various colors.', img: img3 },
  { title: 'Duvets', description: 'High-quality duvets in double and single sizes.', img: img4 },
  { title: 'Pillows', description: 'Big and small pillows for the perfect fit.', img: img5 },
  { title: 'Cushions', description: 'Stylish cushions to enhance your decor.', img: img6 },
  { title: 'Pillow Covers', description: 'High-quality covers to complement your pillows.', img: img7 },
  { title: 'Duvet Covers', description: 'White and colored options to match your style.', img: img8 },
  { title: 'Mattress Protectors', description: 'Waterproof protectors for mattress safety.', img: img9 },
  { title: 'Bath Mats', description: 'Absorbent mats for a dry bathroom floor.', img: img10 },
  { title: 'Curtains', description: 'Elegant curtains to enhance your space.', img: img11 },
];

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 4 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Automatically move to the next item every 3 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <section className="products-section">
      <h1 className="products-title">Shop By Collections</h1>
      <div className="carousel-container">
        <button className="carousel-arrow left-arrow" onClick={handlePrev}>‹</button>
        <div className="carousel-content">
          {products.slice(currentIndex, currentIndex + 4).map((product, index) => (
            <div key={index} className="carousel-item">
              <img src={product.img} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right-arrow" onClick={handleNext}>›</button>
      </div>
    </section>
  );
};

export default ProductsSection;
