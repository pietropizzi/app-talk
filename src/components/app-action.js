import React from 'react';
import ParamRow from './param-row';
import appUrlStyles from './app-url.module.css';

const AppUrl = ({ url, parameters }) => {
  const [ urlStart ] = url.split('?');
  const [ schemeStart, path ] = urlStart.split('://');
  return (
    <div styleName='container'>
      <div className='g-monospace'>
        { `${schemeStart}://` }
        <span className='g-text-dark'>{path}</span>
      </div>
      <div styleName='paramWrapper'>
        { parameters && parameters.map((param, index) => <ParamRow key={param.name} param={param} index={index} /> ) }
      </div>
    </div>
  );
};

export default ({ action: { name, description, url, supportsXCallbackUrl, parameters } }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>{description}</div>
      <AppUrl url={url} parameters={parameters} />
    </div>
  );
};
