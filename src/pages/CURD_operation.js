import React, { useState } from "react";
import axios from "axios";

const CRUDoperationPage = () => {
  var [studentListDetails, updateStudentListDetails] = useState([]);
  var [createForm, UpdateCreateForm] = useState({
    name: " ",
    age: " ",
    location: " ",
    id: " ",
  });

  var [selectedID, updateSelectedID] = useState();

  const studentList = () => {
    var url = "http://localhost:5000/api/stdent_list";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        updateStudentListDetails(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditInput = (id, event) => {
    let index = id - 1;
    studentListDetails[index][event.target.name] = event.target.value;
    updateStudentListDetails([...studentListDetails]);
  };

  const result = studentListDetails.map((value, index) => {
    return (
      <div key={index} className="student_list">
        {selectedID === value.id ? (
          <div>
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleEditInput.bind(this, value.id)}
            />
            <input
              type="number"
              name="age"
              value={value.age}
              onChange={handleEditInput.bind(this, value.id)}
            />
            <input
              type="text"
              name="location"
              value={value.location}
              onChange={handleEditInput.bind(this, value.id)}
            />
          </div>
        ) : (
          <div>
            <h3>{value.name}</h3>
            <h3>{value.age}</h3>
            <h3>{value.location}</h3>
          </div>
        )}

        <button onClick={() => deleteDetails(value.id)}>Delete</button>
        {selectedID === value.id ? (
          <button onClick={() => saveStudent(value)}>Save</button>
        ) : (
          <button onClick={() => editDetails(value.id)}>Edit</button>
        )}
      </div>
    );
  });

  const editDetails = (id) => {
    updateSelectedID(id);
  };

  const saveStudent = (value) => {
    const url = "http://localhost:5000/api/update/student/" + value.id;
    axios
      .put(url, value)
      .then((res) => {
        alert(res.data);
        updateSelectedID(undefined);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data);
      });
  };

  const deleteDetails = (id) => {
    const url = "http://localhost:5000/api/delete/student/" + id;

    axios
      .delete(url)
      .then((res) => {
        alert(res.data);
        studentList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleInput = (event) => {
    UpdateCreateForm({
      ...createForm,
      [event.target.name]: event.target.value,
    });
  };

  const sumbitDetails = () => {
    let url = "http://localhost:5000/api/create/details";

    axios
      .post(url, createForm)
      .then((res) => {
        alert(res.data);
        studentList();
        UpdateCreateForm({
          name: "",
          age: "",
          location: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data);
      });
  };

  return (
    <div>
      <h2>Create Details</h2>
      <input
        type="text"
        name="name"
        value={createForm.name}
        placeholder="Enter your Name"
        onChange={handleInput}
      />
      <input
        type="number"
        name="age"
        value={createForm.age}
        placeholder="Enter your Age"
        onChange={handleInput}
      />
      <input
        type="text"
        name="location"
        value={createForm.location}
        placeholder="Enter your Location"
        onChange={handleInput}
      />
      <button onClick={() => sumbitDetails()}>Submit</button>
      <h2>Student Details List</h2>
      <button onClick={() => studentList()}>Student List</button>
      <div className="student_container">
        {result.length === 0 ? <h2>No student record is here</h2> : result}
      </div>
    </div>
  );
};

export default CRUDoperationPage;
