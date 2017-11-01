import React from "react"
import dateToString from "../functions/dateToString.js"

export default class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect() {
    this.props.onSelect(this.props.selected ? null: this.props.value)
  }

  render() {
    let formattedValue = formatValue(this.props.value, this.props.format)
    let style = ""
    const exactWidth = {
      flexGrow: 0,
      flexBasis: (100 - (this.props.perRow - 1)) / this.props.perRow + "%"
    }
    const styles = {
      selector: "selector",
      selected: "selectorActive",
      blank: "selectorEmpty",
      passive: "selectorPassive",
      header: "selectorPassive selectorHeader"
    }
    style = styles.selector + " " + (this.props.selected ? styles.selected : "") + " " + (!this.props.selectable ? styles.passive : "") + " " + ((this.props.format === "blank") || (this.props.format === "header") ? styles[this.props.format] : "")
    const selectorProps = {
      className: style,
      style: typeof this.props.perRow === "number" ? exactWidth : {}
    }
    const Clickable = () => <div {...selectorProps} onClick={this.handleSelect}>{formattedValue}</div>
    const NotClickable = () => <div {...selectorProps}>{formattedValue}</div>
    let selector = this.props.selectable ? <Clickable /> : <NotClickable /> 
    return selector
  }
}

const formatValue = (value, format) => {
  switch (format) {
    case "time": 
      value = value + ":00"
      break
    case "date":
      value = dateToString(value, "short", ".")
      break
    case "day":
      value = dateToString(value, "day")
      break
  }
  return value
}