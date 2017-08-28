import React from 'react';
import setHTMLBackground from '../functions/setHTMLBackground.js';
import Menu from '../components/Menu.js';
import FilterMenu from '../components/FilterMenu.js';
import TextHeader from '../components/TextHeader.js';

// note: not a real container, since it doesn't retrieve the menu (Navigation.js does it). Change?
 
class Food extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        glutenFreeOnly: false
      };
      // binding only need for event handlers, not arrow functions for handling of scope for "this"
      this.handleGlutenFreeInput = this.handleGlutenFreeInput.bind(this);
    }

    handleGlutenFreeInput(glutenFreeOnly) {
        this.setState({
            glutenFreeOnly: glutenFreeOnly
        })
    }
    
    // setHTMLBackground(0); // fix this as a state change!
    render() {
        return (
            <div className="sectionElement">
            <TextHeader 
                text="Food and Drinks" 
            />
            <FilterMenu 
                GlutenFreeOnly={this.state.glutenFreeOnly}
                onGlutenFreeInput={this.handleGlutenFreeInput}
            />
            <Menu menu={this.props.menu} glutenfreeonly={this.state.glutenFreeOnly} />
            </div>
        )
    }
}

export default Food;
