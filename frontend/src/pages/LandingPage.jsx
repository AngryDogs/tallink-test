import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import AllRooms from '../components/AllRooms';
import { identity } from 'lodash';
import { connect } from 'react-redux';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container custom-container">
           <AllRooms />
        </div>
      </div>
    )
  }
}

export default connect(identity)(LandingPage);
