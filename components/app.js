import React from 'react';
import StudentsList from './student-list';
import CreateStudent from './create-student';

//sample object array
const students = [
  {
    name: 'Jasmine Taylor',
    grade: '8',
    school: 'Franklin',
    isCompleted: false
  },
  {
    name: 'Kevin Parker',
    grade: '6',
    school: 'Solano',
    isCompleted: true
  },
  {
    name: 'Dominique Hererra',
    grade: '9',
    school: 'Hogan',
    isCompleted: true
  },
  {
    name: 'Carlos Marquee',
    grade: '7',
    school: 'Franklin',
    isCompleted: true
  },
  {
    name: 'Rashane Kelly',
    grade: '6',
    school: 'Solano',
    isCompleted: true
  }
]

//component class
export default class App extends React.Component {
  //do this first
  constructor(props) {
    super(props);

    this.state = {
      students
    }
  }

  render() {
    return (
      <div>
        <h1>&nbsp;UTC Student Database</h1>
        <CreateStudent
          createNewStudent={this.createNewStudent.bind(this)}
        />
        <StudentsList
          students={this.state.students}
          />
      </div>
    )
  }

  createNewStudent(student){
    this.state.students.push({
      student,
      isCompleted: false
    });

    this.setState({ students: this.state.students });
  }

}
