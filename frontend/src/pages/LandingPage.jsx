import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import AllConferenceRooms from '../components/ConferenceRooms';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { allRooms } from '../actions/allRoomsAction';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(allRooms());
  }

  render() {
    const { allRooms } = this.props;
    return (
      <div>
        <Navbar />
        <div className="container custom-container">
           <AllConferenceRooms data={allRooms.result} />
        </div>
      </div>
    )
  }
}

export default connect(identity)(LandingPage);
