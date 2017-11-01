import React from "react"
import Modal from "./Modal.js"
import SmallHeader from "../components/SmallHeader.js"
import { SelectorGroup } from "./SelectorGroup.js"
import { createCalendar } from "../functions/createCalendar.js"

export const DatePicker = (props) => {
  let beginDate = new Date(props.beginDate)
  let calendar = createCalendar(beginDate, props.noOfDays)
  let months = []
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  for (let i = 0; i < calendar.length; i++) {
    const selectorMonth = calendar[i].month - 1
    const selectorYear = calendar[i].year
    const dates = []
    // create weekdays header header
    days.map((item, index) => {
      dates.push({
        value: item, 
        format: "header", 
        selectable: false
      })
    })
    let weekDay = new Date(selectorYear, selectorMonth, calendar[i].days[0])
    let blankDays = emptyDays(weekDay)
    // create empty elements so that the first day is located at the correct day of the week
    for (let j = 0; j < blankDays; j++) {
      dates.push({
        value: "", 
        format: "blank", 
        selectable: false
      })
    } 
    // create selectable calendar days
    calendar[i].days.forEach((monthDay) => {
      let day = new Date(selectorYear, selectorMonth, monthDay, 0, 0, 0, 0)
      dates.push({
        value: day.getTime(),
        format: "day",
        selectable: day.getDay() === 0 ? false : true
      })
    })
    // put blank elements last to fill up entire week row, for correct flexbox alignment
    let lastDay = new Date(selectorYear, selectorMonth, calendar[i].days[calendar[i].days.length -1])
    blankDays = 6 - emptyDays(lastDay)
    for (let k = 0; k < blankDays; k++) {
      dates.push({
        value: "", 
        format: "blank", 
        selectable: false
      })
    } 
    months.push(
      <Month
        key={i}
        month={calendar[i].month}
        year={calendar[i].year}
        dates={dates}
        selectedDate={props.selectedDate}
        selectDate={props.selectDate}
      />
    )
  }
  return (
    <Modal {...props} approveModal={props.approve.bind(this, props.selectedDate)} >
      {months}
    </Modal>
  )
}

const Month = (props) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
    <div>
      <SmallHeader text={months[props.month - 1] + " " + props.year} />
      <SelectorGroup 
        values={props.dates} 
        perRow={7}
        selected={props.selectedDate}
        onSelect={props.selectDate}
      />
    </div>
  )
}

const emptyDays = (date) => {
  const dayOfWeek = date.getDay()
  return dayOfWeek === 0 ? 6 : dayOfWeek - 1
}
