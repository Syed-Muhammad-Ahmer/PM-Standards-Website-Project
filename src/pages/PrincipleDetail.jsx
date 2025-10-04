import React from 'react';
import { useParams, Link } from 'react-router-dom';
import pmbokData from '../data/pmbok.json';
import prince2Data from '../data/prince2.json';
import isoData from '../data/iso.json';
import './PrincipleDetail.css';

const PrincipleDetail = () => {
  const { standard, id } = useParams();
  
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

  const principleId = parseInt(id);
  const principle = data.principles.find(p => p.id === principleId);
  const previousPrinciple = data.principles.find(p => p.id === principleId - 1);
  const nextPrinciple = data.principles.find(p => p.id === principleId + 1);

  const getStandardColor = () => {
    const colors = {
      'PMBOK': '#3b82f6',
      'PRINCE2': '#10b981',
      'ISO': '#f59e0b'
    };
    return colors[standard] || '#6b7280';
  };

  return (
    <div className="principle-detail">
      <div className="container">
        <header className="principle-header">
          <div className="breadcrumb">
            <Link to="/explorer">Explorer</Link>
            <span> / </span>
            <Link to={`/explorer/${standard}`}>{data.name}</Link>
            <span> / </span>
            <span>Principle {principleId}</span>
          </div>
          <h1 style={{ color: getStandardColor() }}>{principle.title}</h1>
        </header>

        <div className="principle-card" style={{ borderColor: getStandardColor() }}>
          <div className="principle-content">
            <p>{principle.content}</p>
          </div>
        </div>

        <div className="navigation-buttons">
          {previousPrinciple ? (
            <Link 
              to={`/explorer/${standard}/${previousPrinciple.id}`}
              className="nav-btn prev-btn"
            >
              ← Previous Principle
            </Link>
          ) : (
            <span className="nav-btn disabled">← Previous Principle</span>
          )}
          
          <Link 
            to={`/explorer/${standard}`}
            className="nav-btn back-btn"
          >
            Back to {standard}
          </Link>

          {nextPrinciple ? (
            <Link 
              to={`/explorer/${standard}/${nextPrinciple.id}`}
              className="nav-btn next-btn"
            >
              Next Principle →
            </Link>
          ) : (
            <span className="nav-btn disabled">Next Principle →</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrincipleDetail;