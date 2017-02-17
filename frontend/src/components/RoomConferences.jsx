import React from 'react';
import { Link } from 'react-router';

const RoomConferences = ({ ...data }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Datetime</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      {
        data.data.map((el, key) => (
          <tr key={key}>
            <th scope="row">{key}</th>
            <td>{el.conferenceName}</td>
            <td>{el.conferenceDate}</td>
            <td>
              <Link to={"/room/" + el.roomId + "/conference/" + el.conferenceId}>
                <button>Check</button>
              </Link>
              <button>Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default RoomConferences;
