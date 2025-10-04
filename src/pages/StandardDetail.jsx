import React from 'react';
import { useParams, Link } from 'react-router-dom';
import pmbokData from '../data/pmbok.json';
import prince2Data from '../data/prince2.json';
import isoData from '../data/iso.json';
import './StandardDetail.css';

const StandardDetail = () => {
  const { standard } = useParams();
  
  const getStandardData = () => {
    switch (standard) {
      case 'PMBOK': return pmbokData;
      case 'PRINCE2': return prince2Data;
      case 'ISO': return isoData;
      default: return null;
    }
  };

  const data = getStandardData();
  if (!data) return <div>Standard not found</div>;

  const getStandardColor = () => {
    const colors = {
      'PMBOK': '#3b82f6',
      'PRINCE2': '#10b981',
      'ISO': '#f59e0b'
    };
    return colors[standard] || '#6b7280';
  };

  return (
    <div className="standard-detail">
      <div className="container">
        <header className="page-header">
          <h1 style={{ color: getStandardColor() }}>{data.name}</h1>
          <p className="standard-description">{data.description}</p>
        </header>

        <div className="principles-section">
          <h2>Principles & Guidelines</h2>
          <div className="principles-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Principle</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.principles.map((principle) => (
                  <tr key={principle.id}>
                    <td className="principle-id">{principle.id}</td>
                    <td className="principle-title">{principle.title}</td>
                    <td className="principle-actions">
                      <Link 
                        to={`/explorer/${standard}/${principle.id}`}
                        className="view-details-btn"
                        style={{ backgroundColor: getStandardColor() }}
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="back-link">
          <Link to="/explorer" className="back-btn">
            ← Back to Explorer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StandardDetail;