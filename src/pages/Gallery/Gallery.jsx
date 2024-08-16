import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Gallery.css';
// Importing all 43 images
import img1 from '../../assets/gallery/1.jpg';
import img2 from '../../assets/gallery/2.jpg';
import img3 from '../../assets/gallery/3.jpg';
import img4 from '../../assets/gallery/4.jpg';
import img5 from '../../assets/gallery/5.jpg';
import img6 from '../../assets/gallery/6.jpg';
import img7 from '../../assets/gallery/7.jpg';
import img8 from '../../assets/gallery/8.jpg';
import img9 from '../../assets/gallery/9.jpg';
import img10 from '../../assets/gallery/10.jpg';
import img11 from '../../assets/gallery/11.jpg';
import img12 from '../../assets/gallery/12.jpg';
import img13 from '../../assets/gallery/13.jpg';
import img14 from '../../assets/gallery/14.jpg';
import img15 from '../../assets/gallery/15.jpg';
import img16 from '../../assets/gallery/16.jpg';
import img17 from '../../assets/gallery/17.jpg';
import img18 from '../../assets/gallery/18.jpg';
import img19 from '../../assets/gallery/19.jpg';
import img20 from '../../assets/gallery/20.jpg';
import img21 from '../../assets/gallery/21.jpg';
import img22 from '../../assets/gallery/22.jpg';
import img23 from '../../assets/gallery/23.jpg';
import img24 from '../../assets/gallery/24.jpg';
import img25 from '../../assets/gallery/25.jpg';
import img26 from '../../assets/gallery/26.jpg';
import img27 from '../../assets/gallery/27.jpg';
import img28 from '../../assets/gallery/28.jpg';
import img30 from '../../assets/gallery/30.jpg';
import img31 from '../../assets/gallery/31.jpg';
import img32 from '../../assets/gallery/32.jpg';
import img33 from '../../assets/gallery/33.jpg';
import img34 from '../../assets/gallery/34.jpg';
import img35 from '../../assets/gallery/35.jpg';
import img36 from '../../assets/gallery/36.jpg';
import img37 from '../../assets/gallery/37.jpg';
import img38 from '../../assets/gallery/38.jpg';
import img39 from '../../assets/gallery/39.jpg';
import img40 from '../../assets/gallery/40.jpg';
import img41 from '../../assets/gallery/41.jpg';
import img42 from '../../assets/gallery/42.jpg';
import img43 from '../../assets/gallery/43.jpg';
import img44 from '../../assets/gallery/44.webp';
import img45 from '../../assets/gallery/45.avif';
import img46 from '../../assets/gallery/46.jpg';
import img47 from '../../assets/gallery/47.webp';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43 , img44 , img45 , img46 , img47
];

const Gallery = () => {
  const location = useLocation();
  const sectionRefs = useRef([]);

  const sections = [
    { title: 'Bed Linens', indices: [4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,27,31,32,33,34], id: 'bed-linens' },
    { title: 'Bath Linens', indices: [2,25,26,28,35,36,37,38,39,40,41], id: 'bath-linens' },
    { title: 'Comfort & Cushions', indices: [0,1,3,15,29,30], id: 'comfort-cushions' },
    { title: 'Dining & Decor', indices: [42,43,44,45], id: 'dining-decor' }
  ];

  useEffect(() => {
    if (location.state && location.state.sectionId) {
      const section = sections.find(sec => sec.id === location.state.sectionId);
      if (section) {
        const sectionElement = sectionRefs.current[sections.indexOf(section)];
        if (sectionElement) {
          window.scrollTo({
            top: sectionElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [location.state, sections]);

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        <h1 className="gallery-heading">Gallery</h1>
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            id={section.id}
            className="gallery-section-content"
            ref={el => (sectionRefs.current[sectionIndex] = el)}
          >
            <h1 className="section-heading">{section.title}</h1>
            <div className="gallery">
              {section.indices.map((index) => (
                <div key={index} className={`gallery-item gallery-item-${index + 1}`}>
                  <img src={images[index]} alt={`Gallery ${index + 1}`} className="gallery-image" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;