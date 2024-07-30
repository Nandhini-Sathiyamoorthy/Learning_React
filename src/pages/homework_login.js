import React, { useState } from "react";
import axios from "axios";

const HomeworkLoginPage = () => {
  var [registerDetails, setRegisterDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    gender: "",
    password: "",
    confirmPassword: "",
    id: "",
  });

  var [detatailsList, setDetailsList] = useState([]);

  var [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    date: false,
    gender: false,
    password: false,
    confirmPassword: false,
  });

  var [selectedId, updateSelectedId] = useState(undefined);

  const getRegisterDetails = () => {
    const url = "http://localhost:5000/api/get/register_details";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setDetailsList(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
        console.error(error);
      });
  };

  const handleToInputField = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const handleToSubmit = () => {
    const URL = "http://localhost:5000/api/post/register_details";

    axios
      .post(URL, registerDetails)
      .then((response) => {
        console.log("axios", response);
        if (registerDetails.password === registerDetails.confirmPassword) {
          console.log(registerDetails);
          setDetailsList([...detatailsList, registerDetails]);
          alert(response.data);
          getRegisterDetails();
          setRegisterDetails({
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            gender: "",
            password: "",
            confirmPassword: "",
          });
          setError({
            firstName: false,
            lastName: false,
            email: false,
            date: false,
            gender: false,
            password: false,
            confirmPassword: false,
          });
        } else {
          alert("Password and Confirm password didn't  match");
        }
      })
      .catch((error) => {
        console.error(error);
        setError({
          ...error,
          firstName: registerDetails.firstName === "" ? true : false,
          lastName: registerDetails.lastName === "" ? true : false,
          email: registerDetails.email === "" ? true : false,
          date: registerDetails.date === "" ? true : false,
          gender: registerDetails.gender === "" ? true : false,
          password: registerDetails.password === "" ? true : false,
          confirmPassword:
            registerDetails.confirmPassword === "" ? true : false,
        });
        // alert(error.response.data);
      });
  };

  const handleEditInputDetails = (id, event) => {
    let index = id - 1;
    detatailsList[index][event.target.name] = event.target.value;
    setDetailsList([...detatailsList]);
  };

  var result = detatailsList.map((value, index) => {
    return (
      <tr key={index}>
        {selectedId === value.id ? (
          <>
            <td>
              <input
                type="text"
                name="firstName"
                value={value.firstName}
                onChange={handleEditInputDetails.bind(this, value.id)}
              />
            </td>
            <td>
              <input
                type="text"
                name="lastName"
                value={value.lastName}
                onChange={handleEditInputDetails.bind(this, value.id)}
              />
            </td>
            <td>
              <input
                type="email"
                name="email"
                value={value.email}
                onChange={handleEditInputDetails.bind(this, value.id)}
                disabled
              />
            </td>
            <td>
              <input
                type="date"
                name="date"
                value={value.date}
                onChange={handleEditInputDetails.bind(this, value.id)}
              />
            </td>
            <td>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={value.gender === "Female"}
                onChange={handleEditInputDetails.bind(this, value.id)}
              />
              Female
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={value.gender === "Male"}
                onChange={handleEditInputDetails.bind(this, value.id)}
              />
              Male
            </td>
            <td>
              <input
                type="password"
                name="password"
                value={value.password}
                onChange={handleEditInputDetails.bind(this, value.id)}
                disabled
              />
            </td>
            <td>
              <input
                type="password"
                name="confirmPassword"
                value={value.confirmPassword}
                onChange={handleEditInputDetails.bind(this, value.id)}
                disabled
              />
            </td>
          </>
        ) : (
          <>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.email}</td>
            <td>{value.date}</td>
            <td>{value.gender}</td>
            <td>{value.password}</td>
            <td>{value.confirmPassword}</td>
          </>
        )}
        {selectedId === value.id ? (
          <td>
            <i
              class="fa-regular fa-square-check save_icon"
              onClick={() => saveEmployeeDetails(value)}
            ></i>
          </td>
        ) : (
          <>
            <td>
              <i
                class="fa-solid fa-trash delete_icon"
                onClick={() => deleteRegisterDetails(value.id)}
              ></i>

              <i
                class="fa-solid fa-pen-to-square edit_icon"
                onClick={() => editRegisterDetails(value.id)}
              ></i>
            </td>
          </>
        )}
      </tr>
    );
  });

  const deleteRegisterDetails = (id) => {
    const url = "http://localhost:5000/api/delete/register/details/" + id;
    console.log("id", id);
    axios
      .delete(url)
      .then((response) => {
        alert(response.data);
        getRegisterDetails();
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  const editRegisterDetails = (id) => {
    updateSelectedId(id);
  };

  const saveEmployeeDetails = (value) => {
    const url = "http://localhost:5000/api/update/register/details/" + value.id;

    axios
      .put(url, value)
      .then((response) => {
        alert(response.data);
        getRegisterDetails();
        updateSelectedId(undefined);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data);
      });
  };

  return (
    <div className="container">
      <div className="form_container">
        <h2>Registration Form</h2>
        <div className="name_align">
          <div>
            <label>First Name :-</label>
            <input
              type="text"
              placeholder="First Name"
              value={registerDetails.firstName}
              className="name_input_width"
              name="firstName"
              onChange={handleToInputField}
            />
            {error.firstName && (
              <p className="error_msg">First Name Cannot to be Empty</p>
            )}
          </div>
          <div>
            <label>Last Name :-</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={registerDetails.lastName}
              className="name_input_width"
              onChange={handleToInputField}
            />
            {error.lastName && (
              <p className="error_msg">Last Name Cannot to be Empty</p>
            )}
          </div>
        </div>
        <label>Email ID :-</label>
        <input
          type="email"
          placeholder="Email ID"
          name="email"
          value={registerDetails.email}
          className="input_width"
          onChange={handleToInputField}
        />
        {error.email && <p className="error_msg">Email Cannot to be Empty</p>}
        <label>Date Of Birth</label>
        <input
          type="date"
          placeholder="Date Of Birth"
          name="date"
          value={registerDetails.date}
          className="input_width"
          onChange={handleToInputField}
        />
        {error.date && <p className="error_msg">Date Cannot to be Empty</p>}
        <label>Gender</label> <br />
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={registerDetails.gender === "Female"}
          onChange={handleToInputField}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={registerDetails.gender === "Male"}
          onChange={handleToInputField}
        />
        Male
        {error.gender && <p className="error_msg">Gender Cannot to be Empty</p>}
        <br />
        <label>Password :-</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={registerDetails.password}
          className="input_width"
          onChange={handleToInputField}
        />
        {error.password && (
          <p className="error_msg">Password Cannot to be Empty</p>
        )}
        <label>Confrim Password :-</label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={registerDetails.confirmPassword}
          className="input_width"
          onChange={handleToInputField}
        />
        {error.confirmPassword && (
          <p className="error_msg">Confirm Password Cannot to be Empty</p>
        )}
        <button
          type="submit"
          onClick={() => {
            handleToSubmit();
          }}
          className="button_register"
        >
          Register Now!
        </button>
      </div>
      <div className="show_container">
        {/* <h4>First Name : - {registerDetails.firstName}</h4>
        <h4>Last Name : - {registerDetails.lastName}</h4>
        <h4>Email ID : - {registerDetails.email}</h4>
        <h4>Date Of Birth : - {registerDetails.date}</h4>
        <h4>Gender : - {registerDetails.gender}</h4>
        <h4>Password : - {registerDetails.password}</h4>
        <h4>Confirm Password : - {registerDetails.confirmPassword}</h4> */}
        <h2 onClick={() => getRegisterDetails()}>Load Details</h2>
        <table id="homework_table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Date Of Birth</th>
              <th>Gender</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{result}</tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeworkLoginPage;
