import axios from "axios";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ date: event });
  }

  handleSubmit = (event) => {
    axios.post('http://localhost:8080/api/filter', {
        date: this.state.date,
    })
      .then((response) => {
        this.props.offers.updateOffer(response);
      })
      .catch(function (error) {
      });
      event.preventDefault();

  }


  render() {
    return (
      <form id="myForm" onSubmit={this.handleSubmit}>
        <p className="h4">Date: </p>
        <DatePicker selected={this.state.date} name="date" onChange={this.handleChange} dateFormat="yyyy-MM-dd" className="rounded w-50 border-primary" />
        <button type="submit" className="btn btn-md btn-primary mt-2">
          Confirm
        </button>
      </form>
    );
  }
}

export default DateForm;
