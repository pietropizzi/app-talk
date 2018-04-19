import React from 'react';
import './index.css';

export default ({ children }) =>
  <div>
    <div className='g-module'>
      <h2>AppTalk</h2>
    </div>
    {children()}
  </div>
;
