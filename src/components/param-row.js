import React from 'react';
import './param-row.module.css';

const colors = [
  '#2A5280',
  '#3F8273',
  '#802A7F',
  '#80722A',
  '#802A46',
  '#44802A'
];

const getColor = (index) => colors[index % colors.length];

const ParamRow = ({ param, index }) => {
  const nameTitleAttr = param.required ? 'This parameter is required' : '';
  return (
    <div styleName='container'>
      <div styleName='name' className='g-monospace'>
        { index === 0 ? '?' : '&' }
        <span title={nameTitleAttr} style={{ color: getColor(index) }}>
          { param.name }
          { param.required && <span styleName='nameRequired'>{'* '}</span> }
        </span>=
        <div styleName='nameDot' style={{ backgroundColor: getColor(index) }}></div>
        <div styleName='nameLine' style={{ backgroundColor: getColor(index) }}></div>
      </div>
      <div styleName='description'>
        { param.description && <div>{param.description}</div> }
        { param.options &&
          <ul styleName='options'>
            { param.options.map((option) =>
              <li key={option.description}>{option.description}</li>
            )}
          </ul>
        }
      </div>
    </div>
  );
};

export default ParamRow;
