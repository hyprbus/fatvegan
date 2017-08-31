import React from "react"
import setHTMLBackground from "../functions/setHTMLBackground.js"
import Menu from "../components/Menu.js"
import FilterMenu from "../components/FilterMenu.js"
import TextHeader from "../components/TextHeader.js"

// note: not a real container, since it doesn't retrieve the menu (Navigation.js does it). Change?

class Food extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      glutenFreeOnly: false,
      hotness: -1,
      hotnessValues: ["No Chili", "Slightly Hot", "Hot", "Very Hot"]
    }
    // binding needed for event handlers for handling of scope of this operator
    this.handleGlutenFreeInput = this.handleGlutenFreeInput.bind(this)
    this.handleHotnessChange = this.handleHotnessChange.bind(this)
  }

  handleGlutenFreeInput(glutenFreeOnly) {
    this.setState({
      glutenFreeOnly: glutenFreeOnly
    })
  }

  handleHotnessChange(hotness) {
    this.setState({
      hotness: hotness
    })
  }

  // setHTMLBackground(0) // fix this as a state change!
  render() {
    return (
      <div className="sectionElement">
        <TextHeader
          text="Food and Drinks"
        />
        <FilterMenu
          GlutenFreeOnly={this.state.glutenFreeOnly}
          onGlutenFreeInput={this.handleGlutenFreeInput}
          hotnessFilter={this.state.hotness}
          hotnessValues={this.state.hotnessValues}
          onHotnessInput={this.handleHotnessChange}
        />
        <Menu
          menu={this.props.menu}
          glutenfreeonly={this.state.glutenFreeOnly}
          hotnessFilter={this.state.hotness}
          hotnessValues={this.state.hotnessValues}
        />
      </div>
    )
  }
}

export default Food
