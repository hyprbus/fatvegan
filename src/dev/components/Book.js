import React from "react"
import TextHeader from "./TextHeader.js"
import StaticText from "./StaticText.js"

class Book extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="subPage">
        <TextHeader text="Book" />
        <StaticText text="Book a table here now." />
      </div>
    )
  }
}

export default Book
