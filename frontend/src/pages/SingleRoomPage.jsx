import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { singleRoom } from '../actions/roomActions';
import RoomConferences from '../components/RoomConferences';

class SingleRoomPage extends Component {

  constructor(props) {
    super(props);
    const { dispatch, params } = props;
    dispatch(singleRoom(params.id));
  }

  render() {
    const { roomName, location, conferences } = this.props.roomReducer.currentRoom;
    const body = roomName.length !== 0 ? (
      <div>
        <h1>{roomName}</h1>
        <h4>{location}</h4>
        <RoomConferences data={conferences} />
      </div>
    ) : (<h1>Nothing to show here</h1>);
    return (
      <div>
        <Navbar />
        <div className="container custom-container">
          {body}
        </div>
      </div>
    )
  }
}

export default connect(identity)(SingleRoomPage);
