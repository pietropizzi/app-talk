import React from "react";

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h2>AppTalk</h2>
    {children()}
  </div>
;
