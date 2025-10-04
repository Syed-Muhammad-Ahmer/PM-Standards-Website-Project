import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Project Management Standards Explorer
          </h1>
          <p className="hero-description">
            Discover and compare the world's leading project management standards - 
            PMBOK, PRINCE2, and ISO 21500. Gain insights into their principles, 
            methodologies, and best practices.
          </p>
          <div className="hero-actions">
            <Link to="/explorer" className="btn btn-primary">
              Start Exploring
            </Link>
            <Link to="/comparison" className="btn btn-secondary">
              Compare Standards
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">What You'll Discover</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Comprehensive Guides</h3>
              <p>Detailed explanations of each standard's principles and methodologies</p>
            </div>
            <div className="feature-card">
              <h3>Side-by-Side Comparison</h3>
              <p>Compare how different standards approach common project management topics</p>
            </div>
            <div className="feature-card">
              <h3>Expert Insights</h3>
              <p>Understand similarities, differences, and unique aspects of each standard</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;