import React, { useState } from "react";
import axios from "axios";

const ApiPage = () => {
  var [userList, setUserList] = useState([]);
  var [userDetails, setUserDetails] = useState({
    name: "",
    job: "",
  });

  const getMethod = () => {
    const URL = "https://reqres.in/api/users?page=2";

    axios
      .get(URL)
      .then((res) => {
        console.log(res.data.data);
        setUserList(res.data.data);
      })
      .catch((e) => {
        console.log(e.error);
        alert("Network Error");
      });
  };

  const userResult = userList.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} alt="profile_pic" width="60" />
        </td>
      </tr>
    );
  });

  const handleInputField = (event) => {
    // console.log(event.target.value);
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleToSubmit = () => {
    console.log(userDetails);

    const url = "http://localhost:5000/api/create/user";

    axios
      .post(url, userDetails)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const getWelcomApiMethod = () => {
    const url = "http://localhost:5000/api/welcome";

    axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getStudentList = () => {
    const url = "http://localhost:5000/api/stdent_list";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div>
      <h2>Get Method</h2>
      <button onClick={() => getMethod()}>Get Info</button>
      <button onClick={() => getWelcomApiMethod()}>Get Welcom Api</button>
      <button onClick={() => getStudentList()}>Student List</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Profile Picture</th>
          </tr>
        </thead>
        <tbody>{userResult}</tbody>
      </table>
      <h2>Post Method</h2>

      <div>
        <label>Enter Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleInputField}
        />
      </div>
      <div>
        <label>Enter Your Job</label>
        <input
          type="text"
          name="job"
          placeholder="Enter Job"
          onChange={handleInputField}
        />
      </div>
      <button onClick={() => handleToSubmit()}>Submit</button>
    </div>
  );
};

export default ApiPage;
