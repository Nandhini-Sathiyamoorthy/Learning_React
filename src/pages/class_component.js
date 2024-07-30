import { render } from "@testing-library/react";
import axios from "axios";
import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        userName: "",
        email: "",
        password: "",
      },
      getUserDetails: [],
    };
  }
  handleToInputField(event) {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [event.target.name]: event.target.value,
      },
    });
  }

  handleToSubmitButton() {
    console.log(this.state.userDetails);
  }

  getDetails() {
    var url = " http://localhost:5000/api/list/contact";

    axios
      .get(url)
      .then((response) => {
        this.setState({
          getUserDetails: [...response.data],
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.getUserDetails);
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <div>
          <div>
            <input
              type="text"
              name="userName"
              placeholder="Enter your Name"
              onChange={this.handleToInputField.bind(this)}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              onChange={this.handleToInputField.bind(this)}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Enter your Password"
              onChange={this.handleToInputField.bind(this)}
            />
          </div>
          <div>
            <button onClick={() => this.handleToSubmitButton()}>Submit</button>
          </div>
        </div>
        <div>
          <button onClick={() => this.getDetails()}>Load Details</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {this.state.getUserDetails.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.Name}</td>
                  <td>{value.Email}</td>
                  <td>{value.Message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassComponent;
