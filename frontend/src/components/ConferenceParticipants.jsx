import React, { Component } from 'react';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { deleteParticipantInConference } from '../actions/conferenceAction';

class ConferenceParticipants extends Component {

  handleDelete(event, id) {
    this.props.dispatch(deleteParticipantInConference(id));
  }

  componentWillReciveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { participants } = this.props.conferenceReducer;
    return (
      <table className="table table-striped">
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
                  <button onClick={event => this.handleDelete(event, el.participantId)}>
                    Delete
                  </button>
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
