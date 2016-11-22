import React from 'react';

export default class StudentsListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

  }

  renderActionSection() {
    if(this.state.isEditing) {
      return (
        <td><button>Save</button>&nbsp;
            <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      )
    }

    return (
      <td><button onClick={this.onEditClick.bind(this)}>Edit</button>&nbsp;
          <button>Delete</button>
      </td>
    )
  }

  render() {
    return (
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.grade}</td>
            <td>{this.props.school}</td>
            {this.renderActionSection()}
          </tr>
    )
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false })
  }


}
