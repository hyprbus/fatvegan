import React from "react"
import DropDown from "./DropDown.js"
import FlipBox from "./FlipBox.js"

class FilterMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeFilter: ""
    }
    this.changeActiveFilter = this.changeActiveFilter.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  // set which filter (search box) has been clicked and is therefore active
  changeActiveFilter(id) {
    this.setState(prevState => ({
      activeFilter: id
    }))
  }

  handleFilterChange(filter, value) {
    this.props.setFilter(filter, value)
  }

  render() {
    // const hotnessValues = this.props.hotnessValues
    return (
      <form className="filterMenu">
        <FlipBox 
          id="glutenFreeOnly"
          label="Gluten-free only"
          value={this.props.GlutenFreeOnly}
          onValueSelect={this.handleFilterChange}
        />
        <DropDown
          id="hotness"
          active={this.state.activeFilter}
          label="Hotness: "
          values={this.props.hotnessValues}
          selected={this.props.hotnessFilter}
          onValueSelect={this.handleFilterChange}
          setToActive={this.changeActiveFilter}
        />
        <DropDown
          id="foodCategory"
          active={this.state.activeFilter}
          label="Category: "
          values={this.props.foodCategoryValues}
          selected={this.props.foodCategoryFilter}
          onValueSelect={this.handleFilterChange}
          setToActive={this.changeActiveFilter}
        />
      </form>
    )
  }
}

export default FilterMenu