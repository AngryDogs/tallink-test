import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import ConferenceParticipants from '../components/ConferenceParticipants';
import { singleConference } from '../actions/conferenceAction';
import ParticipantModal from '../components/ParticipantModal';
import { changeModalStatus } from '../actions/modalAction';

class SingleConferencePage extends Component {

  constructor(props) {
    super(props);
    const { dispatch, params } = props;
    dispatch(singleConference(params.roomId, params.conId));
    dispatch(changeModalStatus(true));
  }

  handleNewParticipant() {
    const { dispatch } = this.props;
    dispatch(changeModalStatus(false));
  }

  render() {
    const { showModal } = this.props.modalReducer;
    const { conferenceName, conferenceDate } = this.props.conferenceReducer;
    const body = conferenceName.length !== 0 ? (
      <div>
        <h1>{conferenceName}</h1>
        <h4>{conferenceDate}</h4>
        <ConferenceParticipants />
        <button
          className="btn"
          onClick={event => this.handleNewParticipant(event)}>
          Add new
        </button>
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
