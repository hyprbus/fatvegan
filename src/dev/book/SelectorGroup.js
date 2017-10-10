import React from "react"
import Selector from "./Selector.js"
import dateToString from "../functions/dateToString.js"

// props.values = [18:00, 19:00, 20:00] etc
// props.perRow = exact number of items per row (eg for creating date picker)
// props.formatting:
//  time: hours 17, 18, 19 ... adds ":00" string
//  date: as milliseconds, displaystring will be D(D).M(M)

export const SelectorGroup = (props) => {
  let selectors = []
  props.values.map((item, index) => {
    let formattedValue = item
    switch (props.formatting) {
      case "time": 
        formattedValue = item + ":00"
        break
      case "date":
        let date = new Date(item)
        formattedValue = dateToString(date, "short", ".")
        break
    }
    selectors.push(
      <Selector
        key={props.selector + index}
        selector={props.selector}
        displayValue={formattedValue}
        value={item}
        selected={props.selected}
        onSelect={props.onSelect}
        perRow={props.perRow}
      />
    )
  })
  return (
    <div className="selectorGroup">
      {selectors}
    </div>
  )
}