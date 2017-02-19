import React, { Component } from 'react';
import { Link } from 'react-router';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { deleteConferenceFromRoom } from '../actions/roomActions';

class RoomConferences extends Component {

  handleDelete(event, roomId, conId) {
    this.props.dispatch(deleteConferenceFromRoom(roomId, conId));
  }

  render() {
    const { data, maxSeats } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Datetime</th>
            <th>Avalability</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((el, key) => (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{el.conferenceName}</td>
                <td>{el.conferenceDate}</td>
                <td>{el.participants.length + "/" + maxSeats}</td>
                <td>
                  <Link
                    to={"/room/" + el.roomId + "/conference/" + el.conferenceId}>
                    <span className="table-edit-btn">
                      &#9998;
                    </span>
                  </Link>
                  <span
                    onClick={event => this.handleDelete(event, el.roomId, el.conferenceId)}
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

export default connect(identity)(RoomConferences);
