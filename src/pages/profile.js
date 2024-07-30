import React, { useState } from "react";

const ProfilePage = () => {
  var [userDetails, setUserDetails] = useState({
    userName: "",
    age: "",
    dateOfBirth: "",
    inTime: "",
    gender: "",
    hobbies: [],
    qualification: "",
    address: "",
  });

  var [error, setError] = useState({
    userName: false,
    age: false,
    dateOfBirth: false,
    inTime: false,
    gender: false,
    hobbies: false,
    qualification: false,
    address: false,
  });

  const handleToInput = (e) => {
    if (e.target.name === "hobbies") {
      if (e.target.checked) {
        userDetails.hobbies.push(e.target.value);
      } else {
        let index = userDetails.hobbies.indexOf(e.target.value);
        userDetails.hobbies.splice(index, 1);
      }
    } else {
      setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    }
  };

  const handleToSubmit = () => {
    console.log(userDetails);
    setError({
      ...error,
      userName: userDetails.userName === "" ? true : false,
      age: userDetails.age === "" ? true : false,
      dateOfBirth: userDetails.dateOfBirth === "" ? true : false,
      inTime: userDetails.inTime === "" ? true : false,
      gender: userDetails.gender === "" ? true : false,
      hobbies: userDetails.hobbies.length === 0 ? true : false,
      qualification: userDetails.qualification === "" ? true : false,
      address: userDetails.address === "" ? true : false,
    });
  };

  return (
    <div>
      <h3>Profile Page</h3>
      <div className="mgn_btm">
        <label className="label_width">Enter Your User Name</label>
        <input
          type="text"
          name="userName"
          placeholder="Enter Your User Name"
          onChange={handleToInput}
        />
        {error.userName && (
          <span className="error_msg">User Name Cannot to be Empty</span>
        )}
      </div>
      <div className="mgn_btm">
        <label className="label_width">Enter Your Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter Your Age"
          onChange={handleToInput}
        />
        {error.age && (
          <span className="error_msg">Age Cannot to be Empty</span>
        )}
      </div>
      <div className="mgn_btm">
        <label className="label_width">Enter Your Date of Birth</label>
        <input type="date" name="dateOfBirth" onChange={handleToInput} />
        {error.dateOfBirth && (
          <span className="error_msg">DOB Cannot to be Empty</span>
        )}
      </div>
      <div className="mgn_btm">
        <label className="label_width">Enter Your In Time</label>
        <input type="time" name="inTime" onChange={handleToInput} />
        {error.inTime && (
          <span className="error_msg">In Time Cannot to be Empty</span>
        )}
      </div>
      <div className="mgn_btm">
        <label className="label_width">Enter Your Gender</label>
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={handleToInput}
        />
        Female
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={handleToInput}
        />
        Male
        {error.gender && (
          <span className="error_msg">Gender Cannot to be Empty</span>
        )}
      </div>
      <div className="mgn_btm">
        <label className="label_width">Enter Your Hobbies</label>
        <input
          type="checkbox"
          value="Music"
          name="hobbies"
          onChange={handleToInput}
        />{" "}
        Music
        <input
          type="checkbox"
          value="Dancing"
          name="hobbies"
          onChange={handleToInput}
        />{" "}
        Dancing
        <input
          type="checkbox"
          value="Singing"
          name="hobbies"
          onChange={handleToInput}
        />{" "}
        Singing
        <input
          type="checkbox"
          value="Shuttle"
          name="hobbies"
          onChange={handleToInput}
        />{" "}
        Shuttle
        <input
          type="checkbox"
          value="Driving"
          name="hobbies"
          onChange={handleToInput}
        />{" "}
        Driving
        {error.hobbies && (
          <span className="error_msg">Hobbies Cannot to be Empty</span>
        )}
      </div>
      <div className="mgn_btm">
        <label className="label_width">Select Your highest Qualification</label>
        <select onChange={handleToInput} name="qualification" defaultValue={""}>
          <option disabled value="">Select your qualification</option>
          <option>SSLC</option>
          <option>HSC</option>
          <option>BE</option>
          <option>B.Tech</option>
          <option>MBBS</option>
        </select>
        {error.qualification && (
          <span className="error_msg">Qualification Cannot to be Empty</span>
        )}
      </div>
      <div className="mgn_btm">
        <label className="label_width">Enter Your Age</label>
        <textarea
          name="address"
          onChange={handleToInput}
          placeholder="Enter your Address"
        ></textarea>
        {error.address && (
          <span className="error_msg">Address Cannot to be Empty</span>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            handleToSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
