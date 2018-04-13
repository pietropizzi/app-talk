import React from 'react';

export default ({ action: { name, description, url, supportsXCallbackUrl, parameters } }) => {
  const [urlStart] = url.split('?');

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <div>{urlStart}</div>
        <div>
          {
            parameters.map((param, index) =>
              <div key={param.name}>
                <div>{index === 0 ? '?' : '&'}<span>{param.name}</span>=</div>
                <div>{param.description}</div>
                { param.options
                    ? param.options.map((option) => <div key={option.description}>{option.description}</div>)
                    : null
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};
