import React from "react"
import TextHeader from "./TextHeader.js"
import StaticText from "./StaticText.js"
import setHTMLBackground from "../functions/setHTMLBackground.js"

class Book extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { 
    setHTMLBackground(0)
  }
  render() {
    return (
      <div className="sectionElement">
        <TextHeader text="Book" />
        <StaticText text="Book a table here now." />
      </div>
    )
  }
}

export default Book
