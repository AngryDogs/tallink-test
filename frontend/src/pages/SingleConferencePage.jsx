import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import ConferenceParticipants from '../components/ConferenceParticipants';
import { singleConference } from '../actions/conferenceAction';

class SingleConferencePage extends Component {

  constructor(props) {
    super(props);
    const { dispatch, params } = props;
    dispatch(singleConference(params.roomId, params.conId));
  }

  render() {
    const { conferenceName, conferenceDate } = this.props.conferenceReducer;
    const body = conferenceName.length !== 0 ? (
      <div>
        <h1>{conferenceName}</h1>
        <h4>{conferenceDate}</h4>
        <ConferenceParticipants />
      </div>
    ) : (<h1>Nothing to show</h1>);
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

export default connect(identity)(SingleConferencePage);
