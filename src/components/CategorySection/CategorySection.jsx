import React from 'react';
import './CategorySection.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/Category/1.jpg';
import img2 from '../../assets/Category/2.png';
import img3 from '../../assets/Category/5.jpg';
import img4 from '../../assets/Category/4.jpg';

const categories = [
  { title: 'Bed Linens', img: img1, sectionId: 'bed-linens' },
  { title: 'Bath Linens', img: img2, sectionId: 'bath-linens' },
  { title: 'Comfort & Cushions', img: img3, sectionId: 'comfort-cushions' },
  { title: 'Dining & Decor', img: img4, sectionId: 'dining-decor' },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (sectionId) => {
    navigate(`/gallery`, { state: { sectionId } });
  };

  return (
    <section id="categories" className="category-section">
      <h1 className="category-title">Shop By Category</h1>
      <div className="category-cards">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category.sectionId)}
          >
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
