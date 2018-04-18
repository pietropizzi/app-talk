import React from 'react';
import './param-row.module.css';

const colors = [
  '#506680',
  '#508075',
  '#80507F'
];

const getColor = (index) => colors[index] || colors[0];

const ParamRow = ({ param, index }) => {
  return (
    <div styleName='container'>
      <div styleName='name' className='g-monospace'>
        { index === 0 ? '?' : '&' }
        <span style={{ color: getColor(index) }}>{param.name}</span>=
        <div styleName='nameDot' style={{ backgroundColor: getColor(index) }}></div>
        <div styleName='nameLine' style={{ backgroundColor: getColor(index) }}></div>
      </div>
      <div styleName='description'>
        { param.description && <div>{param.description}</div> }
        { param.options && param.options.map((option) => <div key={option.description}>{option.description}</div>) }
      </div>
    </div>
  );
};

export default ParamRow;
