import React from "react"
import Selector from "./Selector.js"

// props.values = [{value: 18, format: "time"}, {value: 19, format: "time"} ... ]
// props.perRow = exact number of items per row (eg for creating date picker)

export const SelectorGroup = (props) => {
  let selectors = []
  props.values.map((item, index) => {
    selectors.push(
      <Selector
        key={"selectorGroup" + index}
        format={item.format}
        value={item.value}
        selected={props.selected === item.value ? true : false}
        selectable={item.selectable}
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