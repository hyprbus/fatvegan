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
  let lastCategory = null
  props.menu.forEach(function (d, i) {
    let dishComponent = (
      <Dish
        key={i}
        dish={d.dish}
        description={d.description}
        priceeuro={d.priceEuro}
        glutenfree={d.category_glutenFree}
        hotness={props.hotnessValues[parseInt(d.category_chiliStrength+1)]}
        category={props.foodCategoryValues[parseInt(d.category_area+1)]}
        fodmap={props.fodmapValues[parseInt(d.category_fodmap+1)]}
      />
    )
    // all filtering of the menu here
    if (
      (props.glutenfreeonly === false || d.category_glutenFree === "yes") &&
      ((props.hotnessFilter === -1) || (parseInt(d.category_chiliStrength) === props.hotnessFilter)) &&
      ((props.foodCategoryFilter === -1) || (parseInt(d.category_area) === props.foodCategoryFilter)) &&
      ((props.fodmapFilter === -1) || (parseInt(d.category_fodmap) === props.fodmapFilter))
    ) {

      // before an actual dish should be pushed onto the menu, check if the category header row needs to be added first
      if (d.category_area !== lastCategory) {
        dishes.push(
          <CategoryRow 
            key={"category" + d.category_area} 
            category={props.foodCategoryValues[parseInt(d.category_area+1)]}
        />)
      }
      dishes.push(dishComponent)
      lastCategory = d.category_area
    }
  }

  )
  return (
    <div className="menuStyle">
      {dishes}
    </div>
  )
}

const CategoryRow = (props) => {
  return (
    <div className="categoryRow">{props.category}</div>
  )
}

export default Menu
