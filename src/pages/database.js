import React, { useState } from "react";
import axios from "axios";

const DataBasePage = () => {
  var [databaseDetails, updateDatabaseDetails] = useState([]);
  var [createDatabaseDetails, updateCreateDatabaseDetails] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const getDatabaseDetails = () => {
    const url = " http://localhost:5000/api/list/contact";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        updateDatabaseDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const postDatabseDetails = () => {
    const url = "http://localhost:5000/api/create/contact";

    axios.post(url, createDatabaseDetails)
    .then((response) => {
        updateDatabaseDetails(response.data)
    })
    .catch((error) => {
        console.error(error)
    })
  };

  var result = databaseDetails.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.Name}</td>
        <td>{value.Email}</td>
        <td>{value.Message}</td>
      </tr>
    );
  });

  var handleToInputField = (event) => {
    updateCreateDatabaseDetails({
      ...createDatabaseDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>DataBasePage</h2>
      <button onClick={() => getDatabaseDetails()}>
        Load DataBase Details
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <h2>Create Details</h2>
      <input
        type="text"
        name="Name"
        placeholder="Enter your Name"
        onChange={handleToInputField}
      />
      <br />
      <input
        type="email"
        name="Email"
        placeholder="Enter your Email Id"
        onChange={handleToInputField}
      />
      <br />
      <input
        type="text"
        name="Message"
        placeholder="Enter your Message"
        onChange={handleToInputField}
      />
      <br />
      <button onClick={() => postDatabseDetails()}>Create</button>
    </div>
  );
};

export default DataBasePage;
