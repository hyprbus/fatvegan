import React from "react"

const Dish = (props) => {
  return (
    <div className="dishStyle">
      <DishHeader dish={props.dish} priceeuro={props.priceeuro} />
      <DishDescription description={props.description} />
      <div>Gluten-free: {props.glutenfree}</div>
      <div>Hotness: {props.hotness}</div>
      <div>Category: {props.category}</div>
      <div>FODMAP: {props.fodmap}</div>
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
