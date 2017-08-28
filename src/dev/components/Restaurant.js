import React from 'react';
import setHTMLBackground from '../functions/setHTMLBackground.js';
import TextHeader from './TextHeader.js';
import StaticText from './StaticText.js';

const Restaurant = () => {
    const content = 
    `This is our idea: serve the tastiest, most satisfying vegan food in the city.
    Not watered-down vegan versions of other dishes, but dishes that were vegan from the start:
    cruncy potato chips, grilled vegetables, guacamole, Indian tomato soup, hummus, falafel, Marinara pizza... are you drooling yet?
    We take pride in making our dishes authentic and using the best ingredients and spices.
    We bake our own sourdough bread, which you also can buy home. Be warned though, it's addictive.
    Our charcoal grill put that extra flavour on our grilled and marinated vegetables. 
    Even the most fanatical meat eater will return to us.
    We're also an excellent place for getting a couple of beers, a glass of wine or a drink or two.
    And if you get hungry while you're having a local craft beer, order something at the bar.
    See you soon! 
    `;
    setHTMLBackground(1);
    return (
        <div className="sectionElement">
            <TextHeader text="About the Restaurant" />
            <StaticText text={content} />
        </div>
    )
}

export default Restaurant;
