import React, { useState } from "react";

const LoginPage = () => {
  // var [userName, newUserName] = useState(" ");
  // var [password, newPassword] = useState(" ");

  var [loginForm, setLoginForm] = useState({
    userName: " ",
    password: " ",
  });

  var [name, setName] = useState("Mr. Tharun");

  // const getUserName = (event) => {
  //   newUserName(event.target.value);
  // };

  // const getPassword = (event) => {
  //   newPassword(event.target.value);
  // };

  const handleToInput = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleToSubmit = () => {
    console.log(loginForm);
  };

  const toPrint = () => {
    setName("Sharvesh");
  };

  return (
    <div>
      <h1 className="heading">Login Form</h1>
      <label>Email Id -</label>
      <input
        type="email"
        name="userName"
        placeholder="Email ID"
        onChange={handleToInput}
      />
      <br />
      <label>Password -</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleToInput}
      />
      <br />
      <button type="submit" onClick={() => handleToSubmit()}>
        Log in
      </button>
      <h3>UserName :- {loginForm.userName}</h3>
      <h3>Password :-{loginForm.password}</h3>
      <h3>{name}</h3>
      <button onClick={() => toPrint()}>Click</button>
    </div>
  );
};

export default LoginPage;
