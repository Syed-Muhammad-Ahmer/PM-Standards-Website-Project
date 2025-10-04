import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import compareData from '../data/compare.json';
import SearchBar from '../components/SearchBar';
import './Comparison.css';

const Comparison = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStandardColor = (standard) => {
    const colors = {
      'PMBOK': '#3b82f6',
      'PRINCE2': '#10b981',
      'ISO': '#f59e0b'
    };
    return colors[standard] || '#6b7280';
  };

  // Filter topics based on search term in main heading only
  const filteredTopics = useMemo(() => {
    if (!searchTerm.trim()) {
      return compareData.topics;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    
    return compareData.topics.filter(topic => 
      topic.title.toLowerCase().includes(lowercasedSearch)
    );
  }, [searchTerm]);

  return (
    <div className="comparison">
      <div className="container">
        <header className="page-header">
          <h1>Standards Comparison</h1>
          <p>Compare how different project management standards approach common topics</p>
        </header>

        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search topics by name..."
        />

        {/* Search Results Info */}
        {searchTerm && (
          <div className="search-results-info">
            <p>
              Found {filteredTopics.length} topic{filteredTopics.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </p>
          </div>
        )}

        <div className="comparison-grid">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <div key={topic.id} className="comparison-card">
                <h2 className="topic-title">{topic.title}</h2>
                <div className="standards-comparison">
                  {Object.entries(topic.standards).map(([standard, data]) => (
                    <div key={standard} className="standard-comparison">
                      <h3 
                        className="standard-name"
                        style={{ color: getStandardColor(standard) }}
                      >
                        {standard}
                      </h3>
                      <p className="comparison-content">{data.content}</p>
                      <Link 
                        to={`/explorer/${standard}/${data.principleId}`}
                        className="view-details-link"
                        style={{ color: getStandardColor(standard) }}
                      >
                        View Principle Details →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No topics found</h3>
              <p>Try adjusting your search terms or browse all topics.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comparison;