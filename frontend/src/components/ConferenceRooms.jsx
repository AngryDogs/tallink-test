import React from 'react';

const AllConferenceRooms = (data) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Location</th>
        <th>Max seats</th>
      </tr>
    </thead>
    <tbody>
      {
        data.data.map((el, key) => (
          <tr key={key}>
            <th scope="row">{key}</th>
            <td>{el.roomName}</td>
            <td>{el.location}</td>
            <td>{el.maxSeats}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default AllConferenceRooms;
