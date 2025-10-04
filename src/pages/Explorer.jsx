import React from 'react';
import StandardCard from '../components/StandardCard';
import pmbokData from '../data/pmbok.json';
import prince2Data from '../data/prince2.json';
import isoData from '../data/iso.json';
import './Explorer.css';

const Explorer = () => {
  return (
    <div className="explorer">
      <div className="container">
        <header className="page-header">
          <h1>Standards Explorer</h1>
          <p>Explore the three major project management standards and their guiding principles</p>
        </header>

        <div className="standards-grid">
          <StandardCard standard="PMBOK" data={pmbokData} />
          <StandardCard standard="PRINCE2" data={prince2Data} />
          <StandardCard standard="ISO" data={isoData} />
        </div>
      </div>
    </div>
  );
};

export default Explorer;