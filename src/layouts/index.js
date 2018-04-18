import React from 'react';
import './index.css';

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 1000, padding: `0 1rem` }}>
    <h2>AppTalk</h2>
    {children()}
  </div>
;
