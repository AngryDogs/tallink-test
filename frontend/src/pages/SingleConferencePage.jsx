import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import ConferenceParticipants from '../components/ConferenceParticipants';
import { singleConference } from '../actions/conferenceAction';
import { singleRoom } from '../actions/roomActions';
import ParticipantModal from '../components/ParticipantModal';
import { changeModalStatus } from '../actions/modalAction';

class SingleConferencePage extends Component {

  constructor(props) {
    super(props);
    const { dispatch, params } = props;
    dispatch(singleRoom(params.roomId));
    dispatch(singleConference(params.roomId, params.conId));
    dispatch(changeModalStatus(true));
  }

  handleNewParticipant() {
    const { dispatch } = this.props;
    dispatch(changeModalStatus(false));
  }

  valid(element) {
    return element !== undefined;
  }

  render() {
    const { showModal } = this.props.modalReducer;
    const { maxSeats } = this.props.roomReducer.currentRoom;
    const { conferenceName, conferenceDate, participants } = this.props.conferenceReducer;

    const addNewConBtn = this.valid(participants) && participants.length >= maxSeats ? '' : (
      <button
        className="btn"
        onClick={event => this.handleNewParticipant(event)}>
        Add new participant
      </button>
    )

    const body = this.valid(conferenceName) && conferenceName.length !== 0 ? (
      <div>
        <h1>{conferenceName}</h1>
        <h4>{conferenceDate}</h4>
        <ConferenceParticipants />
        {addNewConBtn}
      </div>
    ) : (<h1>Nothing to show</h1>);

    const modal = showModal ?
      <ParticipantModal
        roomId={this.props.params.roomId}
        conId={this.props.params.conId} /> : '';

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

export default connect(identity)(SingleConferencePage);
