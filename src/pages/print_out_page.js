import React, { useState } from "react";

const PrintOutPage = () => {
  var [oldMessage, newMessage] = useState("Hello New Message");

  var userName = "NS";

  var userDetails = {
    firstName: "Nandhini",
    lastName: "Sathiyamoorthy",
  };

  var userDetailsList = [
    {
      firstName: "abcd",
      userId: "1234",
    },
    {
      firstName: "efgh",
      userId: "5678",
    },
    {
      firstName: "ijkl",
      userId: "4567",
    },
  ];

  var finalResult = userDetailsList.map(function (value, index) {
    return (
      <h3 key={index}>
        {value.firstName}
        {"  "}
        {value.userId}
      </h3>
    );
  });

  const Display = () => {
    var message = "Happy Sunday";
    alert(message);
  };

  const getInputValue = (event) => {
    newMessage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h2>userName {userName}</h2>
      <h2>
        Full name is {userDetails.firstName}
        {"  "} {userDetails.lastName}
      </h2>
      {finalResult}
      <button onClick={() => Display()}>display</button>
      <br />
      <input
        type="text"
        placeholder="Enter your message"
        onChange={getInputValue}
      />
      <h2>{oldMessage}</h2>
    </div>
  );
};

export default PrintOutPage;
