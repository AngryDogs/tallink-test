import React, { Component } from 'react';
import { identity } from 'lodash';
import { connect } from 'react-redux';
import { changeModalStatus } from '../actions/modalAction';
import { addParticipantInConference } from '../actions/conferenceAction';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class ParticipantModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      error: '',
    }
  }

  isInputValid(name) {
    return name.value.length > 0;
  }

  handleDateChange = (date) => {
    this.setState({ date });
  }

  handleCloseModal() {
    const { dispatch } = this.props;
    dispatch(changeModalStatus(true));
  }

  handleSaveParticipant() {
    const { dispatch, conId, roomId } = this.props;
    const { name } = this.refs;
    if(this.isInputValid(name)) {
      dispatch(addParticipantInConference({
        participantName: name.value.trim(),
        participantDate: this.state.date.format('YYYY-MM-DD'),
        conferenceId: conId,
      }, roomId, conId));
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
          <h1 className="modal-header">Add new participant</h1>
          <input
            id="name"
            ref="name"
            className="modal-input"
            type="text"
            placeholder="Name" />
          <DatePicker
            maxDate={moment()}
            className="modal-date"
            onChange={this.handleDateChange}
            dateFormat="YYYY-MM-DD"
            selected={this.state.date} />
          {this.state.error}
          <div className="btn-group">
            <button
              onClick={event => this.handleSaveParticipant(event)}
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

export default connect(identity)(ParticipantModal);
