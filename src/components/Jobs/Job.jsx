import React, { useState } from 'react';
import './Job.css';

const JobsCategory = () => {
  const [activeCategory, setActiveCategory] = useState('UI/UX Design');
  
  const categories = [
    {
      title: 'UI/UX Design',
      totalJobs: 100,
      icon: '🎨',
      color: '#6366f1',
      subCategories: [
        { title: 'Illustration', jobs: 200, icon: '✏️' },
        { title: 'Cool Art', jobs: 150, icon: '🖌️' },
        { title: 'Web Design', jobs: 100, icon: '💻' },
      ]
    },
    {
      title: 'Product Design',
      totalJobs: 110,
      icon: '📱',
      color: '#ec4899',
      subCategories: [
        { title: 'Developer', jobs: 250, icon: '👨‍💻' },
        { title: 'Animation', jobs: 150, icon: '🎬' },
        { title: '100+ More Category', jobs: 100, icon: '➕' },
      ]
    },
    {
      title: 'Development',
      totalJobs: 180,
      icon: '💻',
      color: '#14b8a6',
      subCategories: [
        { title: 'Frontend', jobs: 120, icon: '🖥️' },
        { title: 'Backend', jobs: 90, icon: '🔧' },
        { title: 'Full Stack', jobs: 70, icon: '👨‍💻' },
      ]
    },
    {
      title: 'Marketing',
      totalJobs: 85,
      icon: '📊',
      color: '#f97316',
      subCategories: [
        { title: 'Digital', jobs: 45, icon: '📱' },
        { title: 'Content', jobs: 60, icon: '📝' },
        { title: 'SEO', jobs: 40, icon: '🔍' },
      ]
    }
  ];

  return (
    <div className="jobs-category-container">
      <div className="section-header">
        <h3 className="section-subtitle">Jobs Category</h3>
        <h2 className="section-title">Choose Your Desire Category</h2>
        <p className="section-description">
          There are many variations of passages of available, but the majority have suffered some form, 
          by injected humour, or look even slightly believable.
        </p>
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <div 
            key={category.title}
            className={`category-tab ${activeCategory === category.title ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.title)}
            style={{ 
              background: activeCategory === category.title 
                ? `linear-gradient(135deg, rgba(${hexToRgb(category.color)}, 0.2) 0%, rgba(${hexToRgb(category.color)}, 0.1) 100%)` 
                : 'rgba(255, 255, 255, 0.05)',
              borderColor: activeCategory === category.title ? category.color : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="tab-icon" style={{ background: `rgba(${hexToRgb(category.color)}, 0.15)` }}>
              {category.icon}
            </div>
            <div className="tab-content">
              <h3 className="tab-title">{category.title}</h3>
              <div className="tab-jobs">{category.totalJobs}+ Posted New Jobs</div>
            </div>
          </div>
        ))}
      </div>

      <div className="subcategory-container">
        {categories
          .filter(cat => cat.title === activeCategory)
          .map((category) => (
            <div key={category.title} className="subcategory-grid">
              {category.subCategories.map((sub) => (
                <div 
                  key={sub.title} 
                  className="subcategory-card"
                  style={{ background: `rgba(${hexToRgb(category.color)}, 0.1)` }}
                >
                  <div 
                    className="subcategory-icon" 
                    style={{ background: `rgba(${hexToRgb(category.color)}, 0.15)` }}
                  >
                    {sub.icon}
                  </div>
                  <h4 className="subcategory-title">{sub.title}</h4>
                  <div className="subcategory-jobs">{sub.jobs}+ Posted New Jobs</div>
                </div>
              ))}
            </div>
          ))}
      </div>

      {/* Decorative elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
    </div>
  );
};

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
    : '0, 0, 0';
}

export default JobsCategory;