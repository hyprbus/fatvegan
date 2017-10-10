import React from "react"
import TextHeader from "../components/TextHeader.js"
import StaticText from "../components/StaticText.js"
import Selector from "./Selector.js"
import { SelectorGroup } from "./SelectorGroup.js"
import DatePicker from "./DatePicker.js"
import ConfirmBooking from "./ConfirmBooking.js"
import MyButton from "./MyButton.js"
import { setCookie, getCookie } from "../functions/cookies.js"
import dateToString from "../functions/dateToString.js"

// set quick booking days to next day at 18:00 and 19:00, skip sundays
let day = new Date()
day.setHours(0, 0, 0, 0)
let nextDay = (day.getDay() === 6) ? 2 : 1
day.setDate(day.getDate() + nextDay)
let quickBook1 = new Date(day)
quickBook1.setHours(18)
let quickBook2 = new Date(day)
quickBook2.setHours(19)

const bookingsArr = [
  {guests: 2, date: quickBook1},
  {guests: 2, date: quickBook2}
]

export default class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: null,
      reservationTime: null,
      reservationDate: null,
      tempDate: null,
      activeModal: null,
      bookings: bookingsArr,
      selectedBooking: {},
      contact: {},
      tempContact: {}
    }
    this.setSelectedValue = this.setSelectedValue.bind(this)
    this.approveBooking = this.approveBooking.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.showModal = this.showModal.bind(this)
    this.approveDate = this.approveDate.bind(this)
    this.selectDate = this.selectDate.bind(this)
    this.openBookingModal = this.openBookingModal.bind(this)
    this.cancelDatePicker = this.cancelDatePicker.bind(this)
    this.handleContactChange = this.handleContactChange.bind(this)
    this.cancelConfirmBooking = this.cancelConfirmBooking.bind(this)
  }

  // generic value change with [filter]: value
  setSelectedValue(selector, value) {
    this.setState(prevState => ({
      [selector]: value
    }))
  }
  
  approveBooking(contact, booking) {
    console.log("In real life, write reservation to db: ")
    console.log(booking)
    console.log(contact)
    setContact(contact)
    this.setState(prevState => ({
      contact: contact
    }))
    this.hideModal()
  }

  selectDate(date) {
    this.setState(prevState => ({
      tempDate: date
    }))
  }

  approveDate(date) {
    this.setState(prevState => ({
      reservationDate: date,
    }))
    this.hideModal()
  }
  
  hideModal() {
    this.setState(prevState => ({
      activeModal: null
    }))
  }

  cancelDatePicker(date) {
    this.setState(prevState => ({
      tempDate: date
    }))
    this.hideModal()
  }

  cancelConfirmBooking(contact) {
    this.setState(prevState => ({
      tempContact: contact
    }))
    this.hideModal()
  }

  showModal(modalId) {
    this.setState(prevState => ({
      activeModal: modalId
    }))
  }

  // state selectedBooking: booking
  openBookingModal(modalId, booking) {
    this.setState(prevState => ({
      contact: getContact(),
      selectedBooking: booking
    }))
    this.showModal(modalId)
  }

  // handle contact field changes here
  handleContactChange(e) {
    let contact =  Object.assign({}, this.state.tempContact)
    switch(e.target.name) {
      case "name":
        contact.name = e.target.value 
        break
      case "phone":
        contact.phone = e.target.value 
        break
      case "email":
        contact.email = e.target.value 
        break
    }
    this.setState({tempContact: contact});
  }

  componentWillMount() {
    const initialContact = getContact()
    this.setState({
      contact: initialContact,
      tempContact: initialContact
    })
  }

  render() {
    return (
      <div className="subPage">
        <StaticText text="Alone? Just pop in, we'll seat you." />
        <div className="smallHeader">Quick Book</div>
          <div className="selectorGroup">
            <div className="selectorText"> 
              {dateToString(this.state.bookings[0].date, "long", ".") + ", " + this.state.bookings[0].guests + " persons"}
            </div>
            <MyButton 
              enabled={true} 
              label="Book" 
              action={this.openBookingModal.bind(this, "confirmBookingModal", this.state.bookings[0])} 
            />
        </div>
        <div className="selectorGroup">
          <div className="selectorText">
            {dateToString(this.state.bookings[1].date, "long", ".") + ", " + this.state.bookings[1].guests + " persons"}
          </div>
          <MyButton 
            enabled={true} 
            label="Book" 
            action={this.openBookingModal.bind(this, "confirmBookingModal", this.state.bookings[1])} 
          />
        </div>
        <StaticText text="Book Another Time:" />
        <div className="smallHeader">Guests</div>
        <SelectorGroup
          values={["2", "3", "4", "5", "6"]}
          selector="guests"
          selected={this.state.guests}
          onSelect={this.setSelectedValue}
        />
        <div className="smallHeader">Time</div>
        <SelectorGroup
          values={[18, 19, 20, 21, 22]}
          formatting="time"
          selector="reservationTime"
          selected={this.state.reservationTime}
          onSelect={this.setSelectedValue}
        />
        <div className="smallHeader">Date</div>
        <div className="selectorGroup">
          <div className="selectorText">
            {dateToString(this.state.reservationDate, "medium", ".")}
          </div>
          <MyButton 
            enabled={true} 
            label="Select Date" 
            action={this.showModal.bind(this, "selectDateModal")} 
          />
          <MyButton 
          enabled={this.state.guests !== null && this.state.reservationTime !== null && this.state.reservationDate !== null ? true : false} 
          label="Book" 
          action={this.openBookingModal.bind(this, "confirmBookingModal", 
            {guests: this.state.guests, date: (this.state.reservationDate + toMilliseconds(this.state.reservationTime))})}
          />
        </div>
        <ConfirmBooking
          booking={this.state.selectedBooking}
          header="Confirm Booking"
          confirmationText="Confirm"
          contact={this.state.tempContact}
          handleContactChange={this.handleContactChange}
          modalId="confirmBookingModal"
          visible={this.state.activeModal === "confirmBookingModal" ? true : false}
          cancelModal={this.cancelConfirmBooking.bind(this, this.state.contact)}
          approve={this.approveBooking}
        />
        <DatePicker
          header="Pick a date"
          confirmationText="OK"
          modalID="selectDateModal"
          visible={this.state.activeModal === "selectDateModal" ? true : false}
          cancelModal={this.cancelDatePicker.bind(this, this.state.reservationDate)}
          approveButtonDisabled={this.state.tempDate === null ? true : false}
          selectDate={this.setSelectedValue}
          selectedDate={this.state.tempDate}
          approve={this.approveDate}
        />
      </div>
    )
  }
}

const toMilliseconds = (x) => x*60*60*1000

const getContact = () => {
  let contact = {name: "", email: "", contact}
  contact.name = getCookie("name")
  contact.email = getCookie("email")
  contact.phone = getCookie("phone")
  return contact
}

const setContact = (contact) => {
  setCookie("name", contact.name, 180)  
  setCookie("email", contact.email, 180)
  setCookie("phone", contact.phone, 180)
}
