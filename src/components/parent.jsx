import React, { Component } from "react";
import Register from "./Register";
import EditForm from "./EditForm";
import UserTable from "./UserTable";

const allInfo = [
  {
    id: 0,
    name: "Devang",
    email: "Devang@gmail.com",
    gender: "male"
  },
  {
    id: 1,
    name: "pavan",
    email: "pavan@gmail.com",
    gender: "male"
  }
];
localStorage.setItem("allInfo", JSON.stringify(allInfo));

class parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allInfo: JSON.parse(localStorage.getItem("allInfo")),
      IsEdit: false,
      ItemId: ""
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.GetEditDataById = this.GetEditDataById.bind(this);
  }
  componentWillMount() {
    this.getInfo();
    this.setState({ allInfo });
  }

  getInfo() {
    return this.state.allInfo;
  }

  GetEditDataById = Id => {
    this.setState({ allInfo, IsEdit: true, ItemId: Id });
  };

  onAdd(data) {
    const allInfo = this.getInfo();
    allInfo.push(data);
    this.setState({ allInfo });
  }

  onUpdate(data) {
    let allInfo = this.getInfo();
    allInfo = allInfo.map(allInfo => {
      if (allInfo.id === data.id) {
        allInfo.name = data.name;
        allInfo.email = data.email;
        allInfo.gender = data.gender;
      }
      return allInfo;
    });
    this.setState({ allInfo, IsEdit: false });
  }

  onDelete = Id => {
    let allInfo = this.getInfo();
    let filteredPerson = allInfo.filter(allInfo => {
      return allInfo.id != Id;
    });
    this.setState({ allInfo: filteredPerson, ItemId: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>Personal Information</h1>
        {this.state.IsEdit === true ? (
          <EditForm
            onUpdate={this.onUpdate}
            allData={this.state.allInfo}
            ItemId={this.state.ItemId}
          />
        ) : (
          <Register onAdd={this.onAdd} allData={this.state.allInfo} />
        )}

        <UserTable
          allData={this.state.allInfo}
          editDataId={this.GetEditDataById}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default parent;
