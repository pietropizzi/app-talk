import React from 'react';
import Header from '../components/header';
import './index.css';

export default ({ children }) =>
  <div>
    <Header />
    {children()}
  </div>
;
