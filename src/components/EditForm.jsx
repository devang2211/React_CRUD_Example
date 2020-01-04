import React, { Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonGender = this.onChangePersonGender.bind(this);
    var getAllProps = this.props.allData;
    var getId = this.props.ItemId;
    const PersonInfo = getAllProps.find(item => item.id === getId);
    this.state = {
      id: PersonInfo.id,
      name: PersonInfo.name,
      email: PersonInfo.email,
      gender: PersonInfo.gender
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
    this.props.onUpdate(data);

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
        <h3>Edit Personal Info</h3>
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
          <button>Update</button>
        </div>
      </form>
    );
  }
}

export default EditForm;
