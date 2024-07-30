import React, { useState } from "react";

const NestedContent1 = () => {
  
  var [meassage, newMeassage] = useState("");

  const getTextAreaValue = (event) => {
    newMeassage(event.target.value);
  };

  return (
    <div className="content_1_container">
      <textarea
        placeholder="Enter Your  Feedback"
        onChange={getTextAreaValue}
      />
      <p>{meassage}</p>
    </div>
  );
};

export default NestedContent1;
