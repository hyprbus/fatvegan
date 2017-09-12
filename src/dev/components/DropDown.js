// state: valuesVisible = true/false
//
// props:
// label
// selected 
// values array
// handleFilterChange = callback function for updating state

import React from "react"

class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valuesVisible: false
    }
    this.setVisibility = this.setVisibility.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleLabelClick = this.handleLabelClick.bind(this)
  }

  // note handling of true/false argument and missing argument = toggle
  setVisibility(bool) {
    this.setState(prevState => ({
      valuesVisible: typeof(bool) === "undefined" ? !prevState.valuesVisible : bool
    }))
  }

  // pass selected dropdown value to supplied callback function
  // always set visibility to false
    handleFilterChange(value) {
    this.setVisibility(false)
    this.props.onValueSelect(this.props.id, value)
  }

  // when clicking on the dropdown label, set me to active and flip the visibility of my value list
  // check if I wasn't already active - then set visibility to true, don't flip it 
  handleLabelClick() {
    if (this.props.active !== this.props.id) {
      this.setVisibility(true)
    } else {
      this.setVisibility()
    }
    this.props.setToActive(this.props.id)
  }

  render() {
    let dropDownValues = []
    // first selectable value = all values = first value in the array value, set id = -1
    dropDownValues.push({value: this.props.values[0], filterValue: -1})
    // drop the "all values" value from values array
    let v = this.props.values.slice(1)
    v.forEach(function(element, index) {
      dropDownValues.push({value: element, filterValue: index})
    })
    const listValues = dropDownValues.map((item, i) => {
      return (
        <div
          className={(item.filterValue === this.props.selected) ? "dropDownItem dropDownItemSelected" : "dropDownItem"}
          key={i}
          onClick={this.handleFilterChange.bind(null, item.filterValue)}
        >
          {item.value}
        </div>
      )
    }
    )
    return (
      <div className="dropDown">
        <div className="filterSelector" onClick={this.handleLabelClick}>
          {this.props.label + dropDownValues[dropDownValues.findIndex(
            e => e.filterValue === this.props.selected
          )].value}
        </div>
        <div 
        id={this.props.id} 
        className={(this.state.valuesVisible && (this.props.active === this.props.id)) ? "dropDownList showDropDown" : "dropDownList hideDropDown"}
        >
          {listValues}
        </div>

      </div>
    )
  }
}

export default DropDown
