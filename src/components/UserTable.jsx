import React from "react";

export default class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      data: []
    };
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onDelete = (id, e) => {
    this.props.onDelete(id);
  };

  onEdit = (id, e) => {
    this.props.editDataId(id);
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gemder</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.allData.length > 0 ? (
            this.props.allData.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <button
                    className="button muted-button"
                    onClick={e => {
                      this.onEdit(user.id, e);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="button muted-button"
                    onClick={e => {
                      this.onDelete(user.id, e);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
