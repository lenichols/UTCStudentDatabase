import React from 'react';
import _ from 'lodash';
import StudentsListHeader from './student-list-header';
import StudentsListItem from './student-list-item';

export default class StudentsList extends React.Component {


    renderStudents() {
      return _.map(this.props.students, (student, index) => <StudentsListItem key={index} {...student} />);
    }

    render() {
      return (
        <table id="studentTable" width="100%">
          <StudentsListHeader />
          <tbody>
            {this.renderStudents()}
          </tbody>
        </table>
      )
    }

  }
