import React from 'react';

export default class CreateStudent extends React.Component {

  render() {
    return (
        <form id="studentForm" onSubmit={this.handleCreate.bind(this)} >
          <input className="form-control midinput" type="text" placeholder="Enter students name" ref="createInput" />
          <button id="addStudent" className="form-control" >Create New Student</button>
        </form>
    )
  }

  handleCreate(event) {
    event.preventDefault();
    console.log(this.refs.createInput.value);
    //console.log(this.props.createNewStudent);
    this.props.createNewStudent(this.refs.createInput.value);
  }
}
