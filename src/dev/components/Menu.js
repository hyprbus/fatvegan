// Menu component structure:
//  Menu
//    Dish
//      Name
//      Description
//      Category 1-N

import React from 'react';
import Dish from './Dish.js';

const Menu = (props) => {
  let dishes = [];
  let glutenfreeFilter = props.glutenfreeonly;
  props.menu.forEach(function(d, i) {
  let dishComponent = (
    <Dish
      key={i}
      dish={d.dish}
      description={d.description}
      priceeuro={d.priceEuro}
      glutenfree={d.category_glutenFree}
    />
    );
    if (d.category_glutenFree === "yes" || glutenfreeFilter === false) {
     dishes.push(dishComponent);
    }
  }

  );  
  return (
    <div className="menuStyle">
      {dishes}
    </div>
  )
}

export default Menu;

