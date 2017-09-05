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

  // change visibility of label element to true or false, flip true <=> false if no argument is provided
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
    // set first selectable value to be generic "all" value with id -1
    dropDownValues.push({value: "(all)", filterValue: -1})
    this.props.values.forEach(function(element, index) {
      dropDownValues.push({value: element, filterValue: index})
    })
    const listValues = dropDownValues.map((item, i) => {
      return (
        <div
          className={(item.filterValue === this.props.selected) ? "dropDownItemSelected" : "dropDownItem"}
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
        <div className="dropDownSelector" onClick={this.handleLabelClick}>
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
