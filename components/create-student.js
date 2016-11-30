import React from 'react';

export default class CreateStudent extends React.Component {

  render() {
    return (
      <div>
      <form id="studentForm" onSubmit={this.handleCreate.bind(this)} >
        <div className="col-xs-4">
          Name <input className="form-control" type="text" placeholder="Kylo Ren" ref="createInput" />
        </div>
        <div className="col-xs-1">
          Grade <input className="form-control" type="text" placeholder="A"  ref="createInputGrade" />
        </div>
        <div className="col-xs-3">
          School <input className="form-control" type="text" placeholder="Gibson High" ref="createInputSchool" />
        </div>
        <div className="col-xs-4">
            <br/>
            <button id="addStudent" className="form-control" >Create</button>
        </div>
      </form>
      </div>
    )
  }

  handleCreate(event) {
    event.preventDefault();
    // console.log(this.refs.createInput.value);
    // console.log(this.refs.createInputGrade.value);
    // console.log(this.refs.createInputSchool.value);
    //console.log(this.props.createNewStudent);
    //this.props.createNewStudent(this.refs.createInput.value);
    var formArray = [
      this.refs.createInput.value,
      this.refs.createInputGrade.value,
      this.refs.createInputSchool.value
    ]; //needed to finish passing the array

    this.props.createNewStudent(formArray);
  }
}
