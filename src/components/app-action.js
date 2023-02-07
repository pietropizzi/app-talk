import React from 'react';
import ParamRow from './param-row';
import * as styles from './app-action.module.css';

const AppUrl = ({ url, parameters }) => {
  const [ urlStart ] = url.split('?');
  const [ schemeStart, path ] = urlStart.split('://');

  const fullUrl = parameters
    ? `${url}?${parameters.map((param) => `${param.name}=${param.name}`).join('&')}`
    : url;

  return (
    <div className={styles.urlContainer}>
      <button className={`copyToClipboard ${styles.copyButton}`} data-clipboard-text={fullUrl}>{'Copy to Clipboard'}</button>
      <div className='g-monospace'>
        { `${schemeStart}://` }
        <span className='g-text-dark'>{path}</span>
      </div>
      <div className={styles.urlParamWrapper}>
        { parameters && parameters.map((param, index) => <ParamRow key={param.name} param={param} index={index} /> ) }
      </div>
    </div>
  );
};

export default ({ urlOnly, action: { name, description, url, parameters } }) => {
  return (
    <div>
      { !urlOnly &&
        <div>
          <h3 className={styles.title}>{name}</h3>
          <div className={`g-text-light ${styles.description}`}>{description}</div>
        </div>
      }
      <AppUrl url={url} parameters={parameters} />
    </div>
  );
};
