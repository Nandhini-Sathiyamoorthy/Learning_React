import React, { useState } from "react";

const CreateAccount = () => {
  var [signupDetails, setSignupDetails] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  );

  var [accountList, setAccountList] = useState([]);

  const handleToInput = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleToSubmit = () => {
    console.log(signupDetails);
    setAccountList([...accountList, signupDetails]);
  };

  let result = accountList.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
        <td>{value.email}</td>
        <td>{value.password}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Signup Form</h2>
      <label>First Name :-</label>
      <input
        type="text"
        name="firstName"
        placeholder="Enter your First Name"
        onChange={handleToInput}
      />{" "}
      <br />
      <label>Last Name :-</label>
      <input
        type="text"
        name="lastName"
        placeholder="Enter your Last Name"
        onChange={handleToInput}
      />
      <br />
      <label>Email Id :-</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your Email ID"
        onChange={handleToInput}
      />{" "}
      <br />
      <label>Password :-</label>
      <input
        type="password"
        name="password"
        placeholder="Enter Your password"
        onChange={handleToInput}
      />
      <br />
      <button type="submit" onClick={() => handleToSubmit()}>
        Signup
      </button>
      <div>
        {/* <h2>First Name :-{signupDetails.firstName}</h2>
        <h2>Last Name :-{signupDetails.lastName}</h2>
        <h2>Email Id :-{signupDetails.email}</h2>
        <h2>Password :-{signupDetails.password}</h2> */}

        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Password</th>
          </thead>
          <tbody>{result}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateAccount;
