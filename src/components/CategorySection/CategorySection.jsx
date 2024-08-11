import React from 'react';
import './CategorySection.css';
import img1 from '../../assets/Category/1.jpg';
import img2 from '../../assets/Category/2.png';
import img3 from '../../assets/Category/3.jpg';
import img4 from '../../assets/Category/4.jpg';

const categories = [
  { title: 'Bed Linens', img: img1 },
  { title: 'Bath Linens', img: img2 },
  { title: 'F&B Linens', img: img3 },
  { title: 'Amenities', img: img4 },
];

const CategorySection = () => {
  return (
    <section id="categories" className="category-section">
      <h1 className="category-title">Shop By Category</h1>
      <div className="category-cards">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.img} alt={category.title} className="category-image" />
            <div className="category-info">
              <h3 className="category-name">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
