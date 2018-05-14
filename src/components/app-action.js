import React from 'react';
import ParamRow from './param-row';
import './app-action.module.css';

const AppUrl = ({ url, parameters }) => {
  const [ urlStart ] = url.split('?');
  const [ schemeStart, path ] = urlStart.split('://');

  const fullUrl = parameters
    ? `${url}?${parameters.map((param) => `${param.name}=${param.name}`).join('&')}`
    : url;

  return (
    <div styleName='urlContainer'>
      <button styleName='copyButton' className='copyToClipboard' data-clipboard-text={fullUrl}>{'Copy to Clipboard'}</button>
      <div className='g-monospace'>
        { `${schemeStart}://` }
        <span className='g-text-dark'>{path}</span>
      </div>
      <div styleName='urlParamWrapper'>
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
          <h3 styleName='title'>{name}</h3>
          <div styleName='description' className='g-text-light'>{description}</div>
        </div>
      }
      <AppUrl url={url} parameters={parameters} />
    </div>
  );
};
