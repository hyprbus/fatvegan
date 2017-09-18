import React from "react"
import Menu from "../components/Menu.js"
import FilterMenu from "../components/FilterMenu.js"
import TextHeader from "../components/TextHeader.js"

// note: not a real container, since it doesn't retrieve the menu (Navigation.js does it). Change?

class Food extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // glutenFreeOnly: false,
      hotness: -1,
      hotnessValues: ["(all strengths)", "No Chili", "Slightly Hot", "Hot", "Very Hot"],
      foodCategory: -1,
      foodCategoryValues: ["(all categories)", "Asia", "Europe", "Mediterranean", "Mexico", "Middle East", "North America", "Dessert"],
      fodmap: -1,
      fodmapValues: ["(all)", "High", "Medium", "Low"],
      gluten: -1,
      glutenValues: ["(may contain gluten)", "Gluten-free"]
    }
    // binding needed for event handlers for handling of scope of this operator
    this.setFilter = this.setFilter.bind(this)
  }

  // change dropdown filter value
  setFilter(filter, value) {
    this.setState({
      [filter]: value
    })
  }

  render() {
    return (
      <div className="subPage">
        <TextHeader
          text="Food and Drinks"
        />
        <FilterMenu
          // GlutenFreeOnly={this.state.glutenFreeOnly}
          hotnessFilter={this.state.hotness}
          hotnessValues={this.state.hotnessValues}
          foodCategoryFilter={this.state.foodCategory}
          foodCategoryValues={this.state.foodCategoryValues}
          fodmapFilter={this.state.fodmap}
          fodmapValues={this.state.fodmapValues}
          glutenFilter={this.state.gluten}
          glutenValues={this.state.glutenValues}
          setFilter={this.setFilter}
        />
        <Menu
          menu={this.props.menu}
          // glutenfreeonly={this.state.glutenFreeOnly}
          hotnessFilter={this.state.hotness}
          hotnessValues={this.state.hotnessValues}
          foodCategoryFilter={this.state.foodCategory}
          foodCategoryValues={this.state.foodCategoryValues}
          fodmapFilter={this.state.fodmap}
          fodmapValues={this.state.fodmapValues}
          glutenFilter={this.state.gluten}
          glutenValues={this.state.glutenValues}
        />
      </div>
    )
  }
}

export default Food
