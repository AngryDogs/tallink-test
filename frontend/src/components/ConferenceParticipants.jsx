import React from 'react';

const ConferenceParticipants = (data) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Birthdate</th>
      </tr>
    </thead>
    <tbody>
      {
        data.data.map((el, key) => (
          <tr key={key}>
            <th scope="row">{key}</th>
            <td>{el.participantName}</td>
            <td>{el.participantDate}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default ConferenceParticipants;
