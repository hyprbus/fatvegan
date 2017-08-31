import React from "react"
import DropDown from "./DropDown.js"

class FilterMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleGlutenFreeInputChange = this.handleGlutenFreeInputChange.bind(this)
    this.handleHotnessInputChange = this.handleHotnessInputChange.bind(this)
  }

  handleGlutenFreeInputChange(e) {
    this.props.onGlutenFreeInput(e.target.checked);
  }

  // pass selected hotness value upwards from child
  handleHotnessInputChange(hotness) {
    this.props.onHotnessInput(hotness)
  }

  render() {
    const hotnessValues = this.props.hotnessValues
    return (
      <form className="filterMenu">
        <p>
          <input type="checkbox"
            checked={this.props.GlutenFreeOnly}
            onChange={this.handleGlutenFreeInputChange}
          />
          {" "}
          Gluten-free only
        </p>
        <DropDown
          id="hotness"
          label="Hotness"
          values={hotnessValues}
          selected={this.props.hotnessFilter}
          onValueSelect={this.handleHotnessInputChange}
        />
      </form>
    )
  }
}

export default FilterMenu