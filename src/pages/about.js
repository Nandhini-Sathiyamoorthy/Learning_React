import React, { useState } from "react";
import axios from "axios";

const AboutPage = () => {
  var [employeeList, updateEmployeeList] = useState([]);
  var [createEmployeeDetails, updateCreateEmployeeDetails] = useState({
    employeeName: "",
    designation: "",
    inTime: "",
    outTime: "",
    salary: "",
  });
  var [selectedDetails, updateSelectedDetails] = useState();

  var [error, updateError] = useState({
    employeeName: false,
    designation: false,
    inTime: false,
    outTime: false,
    salary: false,
  });

  const getEmployeeDetails = () => {
    var url = "http://localhost:5000/api/employeeList";

    axios
      .get(url)
      .then((response) => {
        console.log("GET", response.data);
        updateEmployeeList(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleEmployeeEditInputField = (id, event) => {
    var index = id - 1;
    employeeList[index][event.target.name] = event.target.value;
    updateEmployeeList([...employeeList]);
  };

  var employeeResult = employeeList.map((value, index) => {
    return (
      <tr key={index}>
        {selectedDetails === value.id ? (
          <>
            <td>
              <input
                type="text"
                name="employeeName"
                value={value.employeeName}
                onChange={handleEmployeeEditInputField.bind(this, value.id)}
              />
            </td>
            <td>
              <input
                type="text"
                name="designation"
                value={value.designation}
                onChange={handleEmployeeEditInputField.bind(this, value.id)}
              />
            </td>
            <td>
              <input
                type="time"
                name="inTime"
                value={value.inTime}
                onChange={handleEmployeeEditInputField.bind(this, value.id)}
              />
            </td>
            <td>
              <input
                type="time"
                name="outTime"
                value={value.outTime}
                onChange={handleEmployeeEditInputField.bind(this, value.id)}
              />
            </td>
            <td>
              <input
                type="text"
                name="salary"
                value={value.salary}
                onChange={handleEmployeeEditInputField.bind(this, value.id)}
              />
            </td>
          </>
        ) : (
          <>
            <td>{value.employeeName}</td>
            <td>{value.designation}</td>
            <td>{value.inTime}</td>
            <td>{value.outTime}</td>
            <td>{value.salary}</td>
          </>
        )}

        {selectedDetails === value.id ? (
          <td>
            <i
              class="fa-regular fa-square-check save_icon"
              onClick={() => saveEmployeeDetails(value)}
            ></i>
          </td>
        ) : (
          <td>
            <i
              class="fa-solid fa-trash delete_icon"
              onClick={() => deleteEmployeeDetails(value.id)}
            ></i>
            <i
              class="fa-solid fa-pen-to-square edit_icon"
              onClick={() => editEmployeeDetails(value.id)}
            ></i>
          </td>
        )}
      </tr>
    );
  });

  const editEmployeeDetails = (id) => {
    updateSelectedDetails(id);
  };

  const saveEmployeeDetails = (value) => {
    const url = "http://localhost:5000/api/update/employee/details/" + value.id;
    axios
      .put(url, value)
      .then((response) => {
        alert(response.data);
        updateSelectedDetails(undefined);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data);
      });
  };

  const deleteEmployeeDetails = (id) => {
    var url = "http://localhost:5000/api/delete/details/" + id;

    axios
      .delete(url)
      .then((res) => {
        alert(res.data);
        getEmployeeDetails();
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const handleEmployeeInputField = (event) => {
    updateCreateEmployeeDetails({
      ...createEmployeeDetails,
      [event.target.name]: event.target.value,
    });
  };

  const postEmployeeDetails = () => {
    var url = "http://localhost:5000/api/create/employee/deatils";

    axios
      .post(url, createEmployeeDetails)
      .then((res) => {
        console.info("POST", res.data);
        alert(res.data);
        getEmployeeDetails();
        updateCreateEmployeeDetails({
          employeeName: "",
          designation: "",
          inTime: "",
          outTime: "",
          salary: "",
        });
        updateError({
          employeeName: false,
          designation: false,
          inTime: false,
          outTime: false,
          salary: false,
        });
      })
      .catch((e) => {
        console.log(e);
        updateError({
          ...error,
          employeeName:
            createEmployeeDetails.employeeName === "" ? true : false,
          designation: createEmployeeDetails.designation === "" ? true : false,
          inTime: createEmployeeDetails.inTime === "" ? true : false,
          outTime: createEmployeeDetails.outTime === "" ? true : false,
          salary: createEmployeeDetails.salary === "" ? true : false,
        });
      });
  };

  return (
    <div>
      <div>
        <h2>Employee Details</h2>
        <button onClick={() => getEmployeeDetails()}>
          Load Employee Details
        </button>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>In Time</th>
              <th>Out Time</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeResult.length === 0 ? (
              <h2>NO RECORDS HERE!</h2>
            ) : (
              employeeResult
            )}
          </tbody>
        </table>
        <div className="create_employee">
          <h2>Create Employee Details</h2>
          <input
            type="text"
            name="employeeName"
            value={createEmployeeDetails.employeeName}
            placeholder="Enter Your name"
            onChange={handleEmployeeInputField}
          />
          {error.employeeName && (
            <span className="error_msg">Employee Name cannot to be Empty</span>
          )}
          <br />
          <input
            type="text"
            name="designation"
            value={createEmployeeDetails.designation}
            placeholder="Enter Your designation"
            onChange={handleEmployeeInputField}
          />
          {error.designation && (
            <span className="error_msg">
              Employee Designation cannot to be Empty
            </span>
          )}
          <br />
          <input
            type="time"
            name="inTime"
            value={createEmployeeDetails.inTime}
            placeholder="Enter Your In Time"
            onChange={handleEmployeeInputField}
          />
          {error.inTime && (
            <span className="error_msg">
              Employee In-Time cannot to be Empty
            </span>
          )}
          <br />
          <input
            type="time"
            name="outTime"
            value={createEmployeeDetails.outTime}
            placeholder="Enter Your Out Time"
            onChange={handleEmployeeInputField}
          />
          {error.outTime && (
            <span className="error_msg">
              Employee Out-Time cannot to be Empty
            </span>
          )}
          <br />
          <input
            type="text"
            name="salary"
            value={createEmployeeDetails.salary}
            placeholder="Enter Your salary"
            onChange={handleEmployeeInputField}
          />
          {error.salary && (
            <span className="error_msg">
              Employee Salary cannot to be Empty
            </span>
          )}
          <br />
          <button onClick={() => postEmployeeDetails()}>Create Details</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
