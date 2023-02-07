import React from 'react';
import * as styles from './param-row.module.css';

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
    <div className={styles.container}>
      <div className={`g-monospace ${styles.name}`}>
        { index === 0 ? '?' : '&' }
        <span title={nameTitleAttr} style={{ color: getColor(index) }}>
          { param.name }
          { param.required && <span className={styles.nameRequired}>{'* '}</span> }
        </span>=
        <div className={styles.nameDot} style={{ backgroundColor: getColor(index) }}></div>
        <div className={styles.nameLine} style={{ backgroundColor: getColor(index) }}></div>
      </div>
      <div className={styles.description}>
        { param.description && <div>{param.description}</div> }
        { param.options &&
          <ul className={styles.options}>
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
