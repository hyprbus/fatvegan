// state: valuesVisible = true/false
//
// props:
// label
// selected 
// values array
// onValueSelect = callback function for updating state

import React from "react"

class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valuesVisible: false
    }
    this.flipVisibility = this.flipVisibility.bind(this)
    this.handleHotnessInputChange = this.handleHotnessInputChange.bind(this)
  }

  // flip visibility of label element
  flipVisibility() {
    this.setState(prevState => ({
      valuesVisible: !prevState.valuesVisible
    }))

  }

  // pass selected hotness value upwards from child
  // note that you're setting the state for two different component: Food and DropDown. What is best practice?
  handleHotnessInputChange(hotness) {
    this.flipVisibility()
    this.props.onValueSelect(hotness)
  }

  render() {
    // create object array with dropdown values and dropdown filter keys, include generic values for "all" filter.
    // E.g. this.props.values = ["mild", "hot", "very hot"]
    // =>
    // [{value: "all", filterValue: -1},  {value: "mild", filterValue: 0}, ... ]

    let dropDownValues = []
    // set first selectable value to be generic "all" value with id -1
    dropDownValues.push({value: "All", filterValue: -1})
    this.props.values.forEach(function(element, index) {
      dropDownValues.push({value: element, filterValue: index})
    })
    const listValues = dropDownValues.map((item, i) => {
      return (
        <div
          className={(item.filterValue === this.props.selected) ? "dropDownItem" : "dropDownItemSelected"}
          key={i}
          onClick={this.handleHotnessInputChange.bind(null, item.filterValue)}
        >
          {item.value}
        </div>
      )
    }
    )
    return (
      <div className="dropDown">
        <div className="dropDownSelector" onClick={this.flipVisibility}>
          {this.props.label + ": " + dropDownValues[dropDownValues.findIndex(
            e => e.filterValue === this.props.selected
          )].value}
        </div>
        <div className={this.state.valuesVisible ? "dropDownList" : "hidden"}>
          {listValues}
        </div>
      </div>
    )
  }
}

export default DropDown
