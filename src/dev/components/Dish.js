import React from 'react';

const Dish = (props) => {
  return (
    <div className="dishStyle">
      <div>{props.dish + " " + props.priceeuro + "\u20AC"}</div>
      <div>{props.description}</div>
      <div>Gluten-free: {props.glutenfree}</div>
    </div>
  )
}

export default Dish;
