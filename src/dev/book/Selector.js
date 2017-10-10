// a selector component
// contains one value which given to a callback function when selected
// only one selector can be active if referring to the same value (eg time of booking)
// props:
// value
// currently selected value
// callback: onSelect
// perRow: exact no of items per row, eg 7 => exact width = 100/perRow
import React from "react"

export default class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect() {
    this.props.onSelect(this.props.selector, this.props.selected !== this.props.value ? this.props.value : null)
  }

  render() {
    const style = "selector"
    const selected = "selectorActive"
    const exactWidth = {
      flexGrow: 0,
      flexBasis: (100/(this.props.perRow)) + "%"
    }
    return (
      <div 
        className={this.props.selected === this.props.value ? style + " "+ selected : style} 
        onClick={this.handleSelect}
        style={typeof this.props.perRow === "number" ? exactWidth : {}}
      >
        {this.props.displayValue}
      </div>
    )
  }
}