import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { singleConference } from '../actions/singelConferenceAction';
import ConferenceParticipants from '../components/ConferenceParticipants';

class SingleConferencePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conferenceName: '',
      conferenceDate: '',
      participants: [],
    }
  }

  componentWillMount() {
    const { dispatch, params } = this.props;
    dispatch(singleConference(params.id));
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps.singleConference;
    console.log(result);
    if('result' in result) {
      this.setState({
        conferenceName: result.result.data.conferenceName,
        conferenceDate: result.result.data.conferenceDate,
        participants: result.result.data.participants,
      });
    };
  }

  render() {
    const { conferenceName, conferenceDate, participants } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container custom-container">
          <h1>{conferenceName}</h1>
          <h4>{conferenceDate}</h4>
          <ConferenceParticipants data={participants} />
        </div>
      </div>
    )
  }
}

export default connect(identity)(SingleConferencePage);
