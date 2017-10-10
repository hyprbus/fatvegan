// header with weekdays
// list next two weeks
// close after date is clicked, callback with selected date
// props:
// start date
// callback
// use Modal, Selector?

import React from "react"
import Modal from "./Modal.js"
import { SelectorGroup } from "./SelectorGroup.js"

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props)
  }

render() {
  const dates = []
  for (let i = 0; i < 14; i++) {
    let day = new Date()
    day.setHours(0, 0, 0, 0)
    day.setDate(day.getDate() + i)
    dates.push(day.getTime())
  }
  return (
    <Modal {...this.props} approveModal={this.props.approve.bind(this, this.props.selectedDate)} >
      <SelectorGroup 
        values={dates} 
        formatting="date"
        perRow={7}
        selector="tempDate"
        selected={this.props.selectedDate}
        onSelect={this.props.selectDate}
      >
      </SelectorGroup>
    </Modal>
  )}
}