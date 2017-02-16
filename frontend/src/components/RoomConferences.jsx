import React from 'react';

const RoomConferences = (data) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Datetime</th>
      </tr>
    </thead>
    <tbody>
      {
        data.data.map((el, key) => (
          <tr key={key}>
            <th scope="row">{key}</th>
            <td>{el.conferenceName}</td>
            <td>{el.conferenceDate}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default RoomConferences;
