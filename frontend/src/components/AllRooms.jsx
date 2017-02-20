import React, { Component } from 'react';
import { Link } from 'react-router';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { allRooms } from '../actions/roomActions';


class AllRooms extends Component {

  constructor(props) {
    super(props);
    props.dispatch(allRooms());
  }

  render() {
    const { rooms } = this.props.roomReducer;
    return (
      <table className="table table-striped">
          <thead>
            <tr>
              <th>Nr</th>
              <th>Name</th>
              <th>Location</th>
              <th>Max seats</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              rooms.map((el, key) => (
                <tr key={key + 1}>
                  <th scope="row">{key + 1}</th>
                  <td>{el.roomName}</td>
                  <td>{el.location}</td>
                  <td>{el.maxSeats}</td>
                  <td>
                    <Link to={"/room/" + el.roomId}>
                      Check
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    );
  }
}

export default connect(identity)(AllRooms);
