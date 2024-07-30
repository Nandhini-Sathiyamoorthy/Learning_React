import React, { useState } from "react";

const ConditionalRendering = () => {
  var [visibility, setVisibility] = useState(true);

  const showHide = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <h2>Conditional Rendering</h2>
      <button
        onClick={() => {
          showHide();
        }}
      >
        Show / Hide
      </button>
      <h3>Conditional Rendering inline if</h3>
      {visibility && (
        <img src={require("../images/template.jpg")} width={250} alt=""/>
      )}
      <h3>Conditional Rendering inline if Else</h3>
      {visibility ? <h3>Permission Granted</h3> : <h3>Access Denied</h3>}
    </div>
  );
};

export default ConditionalRendering;
