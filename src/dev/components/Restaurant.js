import React from 'react'
import TextHeader from './TextHeader.js'
import StaticText from './StaticText.js'

class Restaurant extends React.Component {
    constructor(props) {
        super(props)
      }

    render() {
        const content = 
        `We serve the tastiest, most satisfying vegan food you'll find anywhere.
        These are the dishes and snacks that were vegan from the start:
        Tacos, guacamole, French fries, Indian daal, potato chips, hummus, falafel, Marinara pizza...
        Are you drooling yet?

        We take pride in making our dishes as authentic as possible, and our charcoal grill puts that extra flavour on our grilled and marinated vegetables. 
        We bake our own sourdough bread, which you also can buy to take home with you. Be warned though... it's addictive.
        
        Even the most fanatical meat eaters return to us.
        
        We're also an excellent place for just having a couple of beers, a glass of wine or a drink or two.
        And if you get hungry while you're having a local craft beer, order something at the bar.
        
        See you soon! 
        `
        return (
            <div className="subPage">
                <TextHeader text="About the Restaurant" />
                <StaticText text={content} />
            </div>
        )
    }
}

export default Restaurant
