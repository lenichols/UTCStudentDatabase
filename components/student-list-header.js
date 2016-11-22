import React from 'react';

export default class StudentsListHeader extends React.Component {

  render() {
    return (
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Grade</th>
            <th>School</th>
            <th></th>
          </tr>
        </thead>
    )
  }
}
