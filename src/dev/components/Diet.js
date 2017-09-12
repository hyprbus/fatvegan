import React from 'react'
import TextHeader from './TextHeader.js'
import StaticText from './StaticText.js'
import setHTMLBackground from "../functions/setHTMLBackground.js"

class Diet extends React.Component {
    constructor(props) {
        super(props)
      }
    componentDidMount() { 
        setHTMLBackground(0)
    }
    render() {
        const content = 
        `Can't eat gluten? Sensitive stomach? Nut allergy? Don't worry, we've got your back (or should we say stomach).
        Since we're 100% vegan, you don't have to worry about accidentally eating meat, dairy products or if you're allergic to shellfish.
        Everything we serve is categorised in our menu for people with common allergies and a sensitive stomach (FODMAP).
        If you still worry or have a rare allergy, feel free to contact us, or talk to us when you're here.
        `
        return (
            <div className="sectionElement">
            <TextHeader text="Special Diet?" />
            <StaticText text={content} />
        </div>
        )
    }
}

export default Diet
