import React from 'react';
import './ProductsPage.css';
import bedsheetImage from '../../assets/products/22.jpg';
import towelsImage from '../../assets/products/3.jpg';
import runnersImage from '../../assets/products/6.jpg';
import duvetsImage from '../../assets/products/1.webp';
import pillowsImage from '../../assets/products/3.webp';
import cushionsImage from '../../assets/products/4.jpg';
import coversImage from '../../assets/products/9.jpeg';
import duvetCoverImage from '../../assets/products/7.jpeg';
import mattressProtectorImage from '../../assets/products/1.jpg';
import bathMatImage from '../../assets/products/5.jpg';
import curtainsImage from '../../assets/products/2.jpg';

const products = [
  {
    title: 'Bedsheets',
    description: 'Our bedsheets come in a variety of colors and sizes, including both double and single sizes. Made from high-quality materials, these sheets are designed for comfort and durability, ensuring a restful night’s sleep every time.',
    image: bedsheetImage,
  },
  {
    title: 'Towels',
    description: 'Experience luxury with our hand and bath towels, crafted from soft, absorbent materials. These towels provide ultimate comfort and are perfect for daily use, bringing a touch of elegance to your bathroom.',
    image: towelsImage,
  },
  {
    title: 'Runners',
    description: 'Enhance your home’s decor with our stylish runners, available in various colors. These runners are perfect for adding a pop of color and texture to your living spaces, while also protecting your furniture.',
    image: runnersImage,
  },
  {
    title: 'Duvets',
    description: 'Our duvets are available in both double and single sizes and are made from high-quality materials that provide warmth and comfort. Perfect for cozy nights, these duvets ensure a great night’s sleep.',
    image: duvetsImage,
  },
  {
    title: 'Pillows',
    description: 'Find the perfect fit with our range of pillows, available in both big and small sizes. Designed for comfort and support, these pillows are perfect for ensuring a restful night’s sleep.',
    image: pillowsImage,
  },
  {
    title: 'Cushions',
    description: 'Add a stylish touch to your home with our decorative cushions. Available in various sizes and colors, these cushions are perfect for enhancing your living room or bedroom decor.',
    image: cushionsImage,
  },
  {
    title: 'Pillow Covers',
    description: 'Complement your pillows with our high-quality pillow covers. Available in various designs and materials, these covers add a touch of elegance and protect your pillows.',
    image: coversImage,
  },
  {
    title: 'Duvet Covers',
    description: 'Our duvet covers come in both white and colored options, allowing you to match your style. Made from premium materials, these covers provide comfort and protect your duvet.',
    image: duvetCoverImage,
  },
  {
    title: 'Mattress Protectors',
    description: 'Protect your mattress with our high-quality mattress protectors. These protectors are waterproof and provide a comfortable layer to extend the life of your mattress.',
    image: mattressProtectorImage,
  },
  {
    title: 'Bath Mats',
    description: 'Our bath mats are designed for safety and comfort. Made from absorbent materials, these mats are perfect for keeping your bathroom floor dry and slip-free.',
    image: bathMatImage,
  },
  {
    title: 'Curtains',
    description: 'Enhance your home’s aesthetics with our elegant curtains. Available in various designs and sizes, these curtains provide privacy and add a stylish touch to your windows.',
    image: curtainsImage,
  },
];

function ProductsPage() {
  return (
    <div className="products-page">
      <h1 className="products-title">Products</h1>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-card-inner">
              <h3 className="product-title">{product.title}</h3>
              <img src={product.image} alt={product.title} className="product-image" />
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
