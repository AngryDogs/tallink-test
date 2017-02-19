import React, { Component } from 'react';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { deleteParticipantInConference } from '../actions/conferenceAction';

class ConferenceParticipants extends Component {

  handleDelete(event, id) {
    this.props.dispatch(deleteParticipantInConference(id));
  }

  render() {
    const { participants } = this.props.conferenceReducer;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            participants.map((el, key) => (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{el.participantName}</td>
                <td>{el.participantDate}</td>
                <td>
                  <span
                    onClick={event => this.handleDelete(event, el.participantId)}
                    className="table-delete-btn">
                    &#10006;
                  </span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default connect(identity)(ConferenceParticipants);
