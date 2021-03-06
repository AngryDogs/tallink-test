import React, { Component } from 'react';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { addConferenceToRoom } from '../actions/roomActions';
import { changeModalStatus } from '../actions/modalAction';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class ConferenceModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      error: '',
    }
  }

  isInputValid(name, time) {
    return name.value.length > 0 && time.value.length > 0;
  }

  handleDateChange = (date) => {
    this.setState({ date });
  }

  handleCloseModal() {
    const { dispatch } = this.props;
    dispatch(changeModalStatus(true));
  }

  handleSaveConference() {
    const { dispatch, roomId } = this.props;
    const { time, name } = this.refs;
    const { date } = this.state;
    if(this.isInputValid(name, time)) {
      dispatch(addConferenceToRoom({
        conferenceName: name.value.trim(),
        conferenceDate: `${date.format("YYYY-MM-DD")} ${time.value}`,
        participants: [],
        roomId,
      }, roomId));
      this.handleCloseModal();
    } else {
      this.setState({
        error: (
          <div className="alert alert-danger" role="alert">
            <strong>Oh no!</strong> Please check that all input fields are filled.
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className="custom-modal">
        <div className="custom-modal-content">
          <h1 className="modal-header">Add new conference</h1>
          <input
            ref="name"
            className="modal-input"
            type="text"
            placeholder="Name" />
          <input
            ref="time"
            className="modal-input"
            type="time"
            placeholder="Time" />
          <DatePicker
            minDate={moment()}
            className="modal-date"
            onChange={this.handleDateChange}
            dateFormat="YYYY-MM-DD"
            selected={this.state.date} />
          {this.state.error}
          <div className="btn-group">
            <button
              onClick={event => this.handleSaveConference(event)}
              className="btn">
              Save
            </button>
            <button
              onClick={event => this.handleCloseModal(event)}
              className="btn btn-cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(identity)(ConferenceModal);
