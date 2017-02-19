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
    }
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
    dispatch(addConferenceToRoom({
      conferenceName: this.refs.name.value.trim(),
      conferenceDate: this.state.date.format("YYYY-MM-DD HH:mm"),
      roomId,
    }, roomId));
    this.handleCloseModal();
  }

  render() {
    return (
      <div className="custom-modal">
        <div className="custom-modal-content">
          <h1 className="modal-header">Add new participant</h1>
          <input
            ref="name"
            className="modal-input"
            type="text"
            placeholder="Name" />
          <DatePicker
            className="modal-date"
            onChange={this.handleDateChange}
            dateFormat="YYYY-MM-DD HH:mm"
            selected={this.state.date} />
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
