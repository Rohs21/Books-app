import React from 'react';
import './Sidebar.css';

const predefinedSearches = [
  { label: 'Popular', query: 'popular' },
  { label: 'New Releases', query: 'new' },
  { label: 'Recommended', query: 'recommended' },
  { label: 'Fiction', query: 'fiction' },
  { label: 'Non-Fiction', query: 'nonfiction' },
];

const Sidebar = ({ onPredefinedSearch }) => {
  return (
    <aside className="sidebar">
      <h3>Quick Searches</h3>
      <ul>
        {predefinedSearches.map((item) => (
          <li key={item.query}>
            <button onClick={() => onPredefinedSearch(item.query)}>{item.label}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
