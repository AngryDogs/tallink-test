import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import { identity } from 'lodash';
import { connect } from 'react-redux';

class SingleRoomPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.props.params.id }
      </div>
    )
  }
}

export default connect(identity)(SingleRoomPage);
