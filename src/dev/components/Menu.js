// Menu component structure:
//  Menu
//    Dish
//      Name
//      Description
//      Category 1-N

import React from "react"
import Dish from "./Dish.js"

const Menu = (props) => {
  let dishes = []
  let glutenfreeFilter = props.glutenfreeonly
  props.menu.forEach(function (d, i) {
    let dishComponent = (
      <Dish
        key={i}
        dish={d.dish}
        description={d.description}
        priceeuro={d.priceEuro}
        glutenfree={d.category_glutenFree}
        hotness={props.hotnessValues[parseInt(d.category_chiliStrength)]}
      />
    )
    // all filtering of the menu here
    if (
      (glutenfreeFilter === false || d.category_glutenFree === "yes") &&
      ((props.hotnessFilter === -1) || (parseInt(d.category_chiliStrength) === props.hotnessFilter))
    ) {
      dishes.push(dishComponent)
    }
  }

  )
  return (
    <div className="menuStyle">
      {dishes}
    </div>
  )
}

export default Menu
