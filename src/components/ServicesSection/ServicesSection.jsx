import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: 'Manufacturing',
    description: 'Crafting quality textiles with precision and care, we ensure each product meets the highest standards. Our manufacturing process combines traditional craftsmanship with modern technology, resulting in durable and luxurious textiles that stand the test of time.',
    icon: 'fa-industry',
  },
  {
    title: 'Wholesaling',
    description: 'Delivering bulk orders efficiently and reliably, we cater to businesses seeking premium textiles. Our wholesaling service ensures timely delivery, competitive pricing, and exceptional quality, making us a trusted partner in the textile industry.',
    icon: 'fa-truck-loading',
  },
  {
    title: 'Retailing',
    description: 'Offering premium products directly to consumers, our retail service provides access to our luxurious textile collections. With a focus on quality and customer satisfaction, we bring the best in home textiles to your doorstep.',
    icon: 'fa-store',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h1 className="services-title">Our Services</h1>
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <div className="service-card">
            <div className="service-icon-title">
              <i className={`fas ${service.icon} service-icon`}></i>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <div className="service-content">
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
