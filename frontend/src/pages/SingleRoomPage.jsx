import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { singleRoom } from '../actions/roomActions';
import RoomConferences from '../components/RoomConferences';
import { changeModalStatus } from '../actions/modalAction';
import ConferenceModal from '../components/ConferenceModal';

class SingleRoomPage extends Component {

  constructor(props) {
    super(props);
    const { dispatch, params } = props;
    dispatch(singleRoom(params.id));
    dispatch(changeModalStatus(true));
  }

  handleNewConference() {
    const { dispatch } = this.props;
    dispatch(changeModalStatus(false));
  }

  render() {
    const { showModal } = this.props.modalReducer;
    const { roomName, location, conferences, maxSeats } = this.props.roomReducer.currentRoom;
    const body = roomName !== undefined && roomName.length !== 0 ? (
      <div>
        <h1>{roomName}</h1>
        <h4>{location}</h4>
        <RoomConferences maxSeats={maxSeats} data={conferences} />
        <button
          className="btn"
          onClick={event => this.handleNewConference(event)}>
          Add new
        </button>
      </div>
    ) : (<h1>Nothing to show here</h1>);
    const modal = showModal ?
      <ConferenceModal roomId={this.props.params.id}/> : '';
    return (
      <div>
        <Navbar />
        { modal }
        <div className="container custom-container">
          {body}
        </div>
      </div>
    )
  }
}

export default connect(identity)(SingleRoomPage);
