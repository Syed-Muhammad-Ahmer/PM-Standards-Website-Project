import React from 'react';
import { Link } from 'react-router-dom';
import './StandardCard.css';

const StandardCard = ({ standard, data }) => {
  const getStandardColor = (standard) => {
    const colors = {
      'PMBOK': '#3b82f6',
      'PRINCE2': '#10b981',
      'ISO': '#f59e0b'
    };
    return colors[standard] || '#6b7280';
  };

  return (
    <div className="standard-card" style={{ borderTopColor: getStandardColor(standard) }}>
      <h3 className="standard-title">{data.name}</h3>
      <p className="standard-description">{data.description}</p>
      {/* <div className="principles-count">
        {data.principles.length} Principles
      </div> */}
      <Link 
        to={`/explorer/${standard}`} 
        className="explore-btn"
        style={{ backgroundColor: getStandardColor(standard) }}
      >
        Explore {standard}
      </Link>
    </div>
  );
};

export default StandardCard;