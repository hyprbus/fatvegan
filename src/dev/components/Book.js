import React from "react"
import setHTMLBackground from "../functions/setHTMLBackground.js"
import TextHeader from "./TextHeader.js"
import StaticText from "./StaticText.js"

const Book = () => {
    setHTMLBackground(1)
    return (
      <div className="sectionElement">
        <TextHeader text="Book" />
        <StaticText text="Book a table here now." />
      </div>
    )
  }

export default Book
