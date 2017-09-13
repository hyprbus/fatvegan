import React from "react"
import Icon from "./Icon.js"

const Dish = (props) => {
  return (
    <div className="dishStyle">
      <DishHeader dish={props.dish} priceeuro={props.priceeuro} />
      <DishDescription description={props.description} />
      <div>Hotness: {props.hotness}</div>
      <div>FODMAP: {props.fodmap}</div>
      <Icon 
        type="boolean" 
        value={props.gluten} 
        images={["images/glutenfree-icon.svg"]} 
      />
    </div>
  )
}

const DishHeader = (props) => {
  return (
    <ul className="dishHeader">
      <li>
        <span>{props.dish}</span>
        <span>{props.priceeuro + "\u20AC"}</span>
      </li>
    </ul>
  )
}

const DishDescription = (props) => {
  return (
    <div className="dishDescription">{props.description}</div>
  )
}

export default Dish
