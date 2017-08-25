import React from 'react';
import setHTMLBackground from '../functions/setHTMLBackground.js';
import Menu from './Menu.js';
import TextHeader from './TextHeader.js';

const Food = (props) => {
    setHTMLBackground(0);
    return (
        <div className="sectionElement">
        <TextHeader text="Food and Drinks" />
        <Menu />
        </div>
    )
}

export default Food;
