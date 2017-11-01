import React from 'react'
import TextHeader from './TextHeader.js'
import StaticText from './StaticText.js'

class Diet extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const content = 
        `Sensitive stomach? Celiac disease? Nut allergy? Don't worry, we've got your back (or should we say stomach).
        Since we're 100% vegan, you don't have to worry about accidentally eating meat, dairy products, fish and shellfish.
        Everything we serve is categorized in our menu for people with gluten intolerance and a sensitive stomach (FODMAP).
        If you still worry or have an allergy, feel free to contact us, or talk to us when you're here.
        `
        return (
            <div className="subPage">
                <TextHeader text="Special Diet?" />
                <StaticText text={content} />
            </div>
        )
    }
}

export default Diet
