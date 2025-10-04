import React from 'react';
import pmbokData from '../data/pmbok.json';
import prince2Data from '../data/prince2.json';
import isoData from '../data/iso.json';
import compareData from '../data/compare.json';
import './Insights.css';

const Insights = () => {
  // Realistic overlapping principles
  const getRealisticOverlappingPrinciples = () => {
    return [
      "stakeholder engagement",
      "risk management", 
      "quality focus",
      "change control",
      "structured planning",
      "leadership emphasis",
      "value delivery",
      "continuous improvement",
      "tailoring approach",
      "communication management",
      "monitoring processes",
      "resource allocation"
    ];
  };

  // Remove coverage section entirely - it's misleading
  const showCoverageSection = false;

  const getUniquePrinciples = (standard) => {
    const uniqueMap = {
      'PMBOK': [
        "Stewardship and ethical responsibility",
        "System interactions and complexity",
        "Adaptability and resilience focus",
        "Comprehensive process groups"
      ],
      'PRINCE2': [
        "Continued business justification",
        "Manage by stages with boundaries", 
        "Manage by exception principles",
        "Product-based planning approach"
      ],
      'ISO': [
        "International standardization framework",
        "Global process harmonization",
        "Universal guideline application",
        "Compliance-focused approach"
      ]
    };
    return uniqueMap[standard] || [];
  };

  const overlappingPrinciples = getRealisticOverlappingPrinciples();

  return (
    <div className="insights">
      <div className="container">
        <header className="page-header">
          <h1>Insights Dashboard</h1>
          <p>Comprehensive analysis of similarities, differences, and unique aspects across project management standards</p>
        </header>

        <div className="insights-stats">
          <div className="stat-card">
            <h3>3</h3>
            <p>Top PM Standards</p>
          </div>
          <div className="stat-card">
            <h3>20</h3>
            <p>Comparison Areas</p>
          </div>
          <div className="stat-card">
            <h3>{overlappingPrinciples.length}</h3>
            <p>Common Concepts</p>
          </div>
        </div>

        {/* Remove the misleading coverage section */}
        {showCoverageSection && (
          <div className="coverage-section">
            <h2>Topic Coverage</h2>
            <div className="coverage-grid">
              {/* Coverage cards would go here */}
            </div>
          </div>
        )}

        <div className="insights-grid">
          <div className="insight-card">
            <h2>Similarities</h2>
            <div className="insight-content">
              <h3>Common Principles </h3>
             
              <ul>
                {overlappingPrinciples.map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
              </ul>

              <h3>Universal Best Practices</h3>
              <ul>
                <li><strong>Structured Approach:</strong> All emphasize organized, methodical project execution</li>
                <li><strong>Stakeholder Focus:</strong> Consistent emphasis on engaging and managing stakeholders</li>
                <li><strong>Quality Commitment:</strong> Integrated quality processes throughout project lifecycles</li>
                <li><strong>Risk Awareness:</strong> Proactive identification and management of uncertainties</li>
                <li><strong>Adaptive Methodology:</strong> Tailoring approaches to specific project contexts</li>
                <li><strong>Value Orientation:</strong> Focus on delivering business benefits and outcomes</li>
              </ul>
            </div>
          </div>

          <div className="insight-card differences-card">
            <h2>Key Differences</h2>
            <div className="insight-content">
              <h3>Philosophical Approach</h3>
              <ul>
                <li><strong>PMBOK:</strong> "What to do" - Comprehensive guide of processes and knowledge areas</li>
                <li><strong>PRINCE2:</strong> "How to do it" - Prescriptive methodology with defined processes</li>
                <li><strong>ISO 21500:</strong> "Framework for doing" - International standard for harmonization</li>
              </ul>

              <h3>Structural Foundation</h3>
              <ul>
                <li><strong>PMBOK:</strong> Process Groups + Knowledge Areas matrix structure</li>
                <li><strong>PRINCE2:</strong> Principles + Themes + Processes hierarchical structure</li>
                <li><strong>ISO:</strong> Process Groups + Subject Groups standardized structure</li>
              </ul>

              <h3>Geographical Adoption</h3>
              <ul>
                <li><strong>PMBOK:</strong> Global (PMI-based), strong in Americas and IT sectors</li>
                <li><strong>PRINCE2:</strong> Strong in UK/Europe, government and corporate sectors</li>
                <li><strong>ISO:</strong> Worldwide, manufacturing and international organizations</li>
              </ul>

              <h3>Implementation Focus</h3>
              <ul>
                <li><strong>PMBOK:</strong> Flexible framework adaptable to various project types</li>
                <li><strong>PRINCE2:</strong> Structured methodology for controlled environments</li>
                <li><strong>ISO:</strong> Standardized approach for consistent global application</li>
              </ul>
              <h3>Certification & Professional Development</h3>
            <ul>
           <li><strong>PMBOK:</strong> Individual-focused (PMP, CAPM), testing knowledge, experience, and PDUs</li>
<li><strong>PRINCE2:</strong> Role-based (Foundation/Practitioner), emphasizing process and application</li>
<li><strong>ISO:</strong> Organization-focused, stressing compliance and process alignment</li>

            </ul>
            </div>
          </div>

          <div className="insight-card">
            <h2>Unique Strengths</h2>
            <div className="insight-content">
              <h3>PMBOK Exclusive Advantages</h3>
              <ul>
                {getUniquePrinciples('PMBOK').map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
                <li>Comprehensive knowledge area coverage</li>
                <li>Detailed tools and techniques</li>
                <li>Global PMI certification recognition</li>
              </ul>

              <h3>PRINCE2 Exclusive Advantages</h3>
              <ul>
                {getUniquePrinciples('PRINCE2').map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
                <li>Clear business case focus</li>
                <li>Stage-gate control points</li>
                <li>Product delivery emphasis</li>
              </ul>

              <h3>ISO Exclusive Advantages</h3>
              <ul>
                {getUniquePrinciples('ISO').map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
                <li>International standardization</li>
                <li>Global recognition and compliance</li>
                <li>Harmonization with other standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;