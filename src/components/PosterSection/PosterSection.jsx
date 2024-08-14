import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './PosterSection.css';
import poster1 from '../../assets/poster/poster.jpg';
import poster2 from '../../assets/poster/poster-4.jpg';
import poster3 from '../../assets/poster/poster-5.jpg';

const images = [poster1, poster2, poster3];

const PosterSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="poster-section"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="poster-content">
        <h1 className="poster-title">Welcome to NEWLIN TEXTILE</h1>
        <p className="poster-subtitle">Where comfort meets style.</p>
        <Link to="/products" className="poster-button">EXPLORE</Link> {/* Updated */}
      </div>
    </section>
  );
};

export default PosterSection;
