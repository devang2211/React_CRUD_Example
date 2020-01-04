import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonGender = this.onChangePersonGender.bind(this);
    console.log(this.props.allData);
    var getAllProps = this.props.allData;
    var setId;
    if (getAllProps != "" && getAllProps != undefined) {
      var getLastElement = getAllProps[getAllProps.length - 1];
      console.log(getLastElement);
      setId = getLastElement.id + 1;
    }
    this.state = {
      id: setId,
      name: "",
      email: "",
      gender: ""
    };
  }

  onChangePersonName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePersonEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePersonGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    var data = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender
    };
    console.log(data);
    this.props.onAdd(data);

    this.setState({
      id: 0,
      name: "",
      email: "",
      gender: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add New Personal Info</h3>
        <div className="form-group">
          <label>Person Name: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.onChangePersonName}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={this.onChangePersonEmail}
          />
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.gender}
            onChange={this.onChangePersonGender}
          />
        </div>
        <div className="form-group">
          <button>Add</button>
        </div>
      </form>
    );
  }
}

export default Register;
