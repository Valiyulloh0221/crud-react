import { Component } from "react";
import PropTypes from "prop-types"; // Import prop-types
import "../scss/main.scss";
import Table from "react-bootstrap/Table";

class StudentList extends Component {
  render() {
    const { students } = this.props;
    return (
      <div>
        <Table className="table">
          <thead>
            <tr>
              <th>🆔</th>
              <th>Firstname🙋‍♂️</th>
              <th>Lastname👴</th>
              <th>Group🧑‍🏫</th>
              <th>Does work?🧑‍💻</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.group}</td>
                <td>{student.doesWork ? '✅' : '❌'}</td>
                <td  className="d-flex gap-2">
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button className="btn btn-warning btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
      doesWork: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default StudentList;