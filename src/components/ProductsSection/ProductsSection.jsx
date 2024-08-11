import React, { useState } from 'react';
import './ProductsSection.css';
import img1 from '../../assets/Products/Bedsheets.jpg';
import img2 from '../../assets/Products/towels.webp';
import img3 from '../../assets/Products/runners.jpg';
import img4 from '../../assets/Products/duvets.jpg';
import img5 from '../../assets/Products/pillows.webp';
import img6 from '../../assets/Products/runners.jpg';
import img7 from '../../assets/Products/covers.jpg';
import img8 from '../../assets/Products/duvet_cover.webp';


const products = [
  { title: 'Bedsheets', description: 'White or colored, in double and single sizes.', img: img1 },
  { title: 'Towels', description: 'Hand and bath towels for ultimate comfort.', img: img2 },
  { title: 'Runners', description: 'Available in various colors.', img: img3 },
  { title: 'Duvets', description: 'High-quality duvets in double and single sizes.', img: img4 },
  { title: 'Pillows', description: 'Big and small pillows for the perfect fit.', img: img5 },
  { title: 'Cushions', description: 'Stylish cushions to enhance your decor.', img: img6 },
  { title: 'Pillow Covers', description: 'High-quality covers to complement your pillows.', img: img7 },
  { title: 'Duvet Covers', description: 'White and colored options to match your style.', img: img8 },
];

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 4 ? 0 : prevIndex + 1));
  };

  return (
    <section  className="products-section">
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
