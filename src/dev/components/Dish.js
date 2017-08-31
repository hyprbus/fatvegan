import React from "react"

const Dish = (props) => {
  return (
    <div className="dishStyle">
      <DishName dish={props.dish} priceeuro={props.priceeuro} />
      <DishDescription description={props.description} />
      <div>Gluten-free: {props.glutenfree}</div>
      <div>Hotness: {props.hotness}</div>
    </div>
  )
}

const DishName = (props) => {
  return (
    <div className="dishName">{props.dish + " " + props.priceeuro + "\u20AC"}</div>
  )
}

const DishDescription = (props) => {
  return (
    <div className="dishDescription">{props.description}</div>
  )
}

export default Dish
