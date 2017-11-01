// props: booking details: guests, time, date

import React from "react"
import Modal from "./Modal.js"
import dateToString from "../functions/dateToString.js"
import StaticText from "../components/StaticText.js"

// 

export default class ConfirmBooking extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  // note object spread operator to set part of object in state correctly
  handleChange(e) {
    this.props.handleContactChange(e)
  }
  
  render() {
    const bookingString = dateToString(this.props.booking.date, "long", ".") + ", " + this.props.booking.guests + " persons"
    const approveButtonDisabled = (this.props.contact.name.length === 0) || (this.props.contact.phone.length === 0) || (this.props.contact.email.length === 0)
    return (
      <Modal 
        approveButtonDisabled={approveButtonDisabled}
        approveModal={this.props.approve.bind(this, this.props.contact, this.props.booking)}
        {...this.props} 
      >
        <div className="bookingText">{"Your booking: " + bookingString}</div>
        <div>
          <div className="inputField">
            <div className="inputLabel">Name</div>
            <input className="inputBox" name="name" value={this.props.contact.name} onChange={this.handleChange} />
          </div>
          <div className="inputField">
            <div className="inputLabel">Phone</div>
            <input className="inputBox" name="phone" value={this.props.contact.phone} onChange={this.handleChange} />
          </div>
          <div className="inputField">
            <div className="inputLabel">Email</div>
            <input className="inputBox" name="email" value={this.props.contact.email} onChange={this.handleChange} />
          </div>
        </div>
      </Modal>
    )}
}
