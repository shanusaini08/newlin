import React, { useState } from 'react';
import './ContactUsSection.css';
import ContactUsImage from '../../assets/ContactUs/ContactUs.png'; // Adjust the path if necessary

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName.trim()) formErrors.fullName = 'Full Name is required';
    if (!formData.mobileNumber.trim()) formErrors.mobileNumber = 'Mobile Number is required';
    if (!/^\d{10}$/.test(formData.mobileNumber)) formErrors.mobileNumber = 'Mobile Number should be 10 digits';
    if (!formData.email.trim()) formErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) formErrors.email = 'Invalid Email';
    if (!formData.message.trim()) formErrors.message = 'Message is required';

    return formErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        message: '',
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="contactus-section">
      <h1 className="contactus-title">Contact Us</h1>
      <div className="contactus-content">
        <div className="contactus-image">
        <p><i className="fas fa-map-marker-alt"></i> Visit Us: Newlin, Sector 17 SR Homes, Sukhrali Main Road, right across from Mata Wali Gali.</p>
          <p><i className="fas fa-truck"></i> Order Online for Home Delivery: Call us at 9315814283.</p>
          <p><i className="fas fa-envelope"></i> Email: <a href="mailto:newlin199@gmail.com">newlin199@gmail.com</a></p>

          <img src={ContactUsImage} alt="Contact Us" />
        </div>
        <form className="contactus-form" onSubmit={handleSubmit}>
          <div className="form-group">
          Please include the names of the products you are interested in.
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={errors.fullName ? 'error' : ''}
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={errors.mobileNumber ? 'error' : ''}
            />
            {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
