import React, { useState } from 'react';
import './Slider.css';

const testimonials = [
  {
    name: "Max Makina",
    role: "One Year With Us",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
  {
    name: "Makima Smith",
    role: "One Year With Us",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
  {
    name: "Max Makina",
    role: "One Year With Us",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
  {
    name: "Makima Smith",
    role: "One Year With Us",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div className="testimonial-section">
      <p className="subtitle">Clients Testimonials</p>
      <h2 className="main-title">What A Job Holder Says About Us</h2>
      <p className="desc">
        There are many variations of passages of available, but the majority have suffered some form, by injected humour, or look even slightly believable.
      </p>

      <div className="testimonial-slider">
        <button className="nav-btn" onClick={prevSlide}>&lt;</button>
        
        {visibleTestimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote">❝</div>
            <img src={t.image} className="avatar" alt={t.name} />
            <h3 className="name">{t.name}</h3>
            <p className="role">{t.role}</p>
            <p className="text">{t.text}</p>
          </div>
        ))}

        <button className="nav-btn" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
}
