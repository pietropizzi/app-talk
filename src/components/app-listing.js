import React from 'react';
import AppAction from './app-action'

export default ({ app: { info, actions } }) => {
  return (
    <div>
      <h2>{info.name}</h2>
      {
        actions.map((action) => <AppAction key={action.url} action={action} />)
      }
    </div>
  );
};
