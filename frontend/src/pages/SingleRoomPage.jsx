import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { singleRoom } from '../actions/singleRoomAction';
import RoomConferences from '../components/RoomConferences';

class SingleRoomPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      roomName: '',
      conferences: [],
    }
  }

  componentWillMount() {
    const { dispatch, params } = this.props;
    dispatch(singleRoom(params.id));
  }

  componentWillReceiveProps(nextProps) {
    const { result } = nextProps.singleRoom;
    if('result' in result) {
      this.setState({
        location: result.result.data.location,
        roomName: result.result.data.roomName,
        conferences: result.result.data.conferences,
      });
    };
  }

  render() {
    const { roomName, location, conferences } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container custom-container">
          <h1>{roomName}</h1>
          <h4>{location}</h4>
          <RoomConferences data={conferences} />
        </div>
      </div>
    )
  }
}

export default connect(identity)(SingleRoomPage);
