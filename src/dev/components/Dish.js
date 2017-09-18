import React from "react"

const Dish = (props) => {
  let iconGroup = []
  if (props.gluten) {
    iconGroup.push(
      <IconImage 
        key={"gluten0"} 
        iconStyle="dishIconImage"
        source="images/glutenfree-icon.svg" 
      />)
  }
  if (props.hotness > 0) {
    let i = 0;
    for (i; i < props.hotness; i++) {
      iconGroup.push(
        <IconImage 
          key={"hotness" + i} 
          iconStyle="dishIconImage"
          source={"images/chili-icon.svg"} 
        />)
    }
  }

  if (props.fodmap > 0) {
    let i = 0;
    for (i; i < props.fodmap; i++) {
      iconGroup.push(
        <IconImage 
          key={"fodmap" + i} 
          iconStyle="dishIconImage"
          source={"images/fodmap-icon.svg"} 
        />)
    }
  }

  return (
    <div className="dishStyle">
      <DishHeader dish={props.dish} priceeuro={props.priceeuro} />
      <DishDescription description={props.description} />
      <div>
        {iconGroup}
      </div>
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

const IconImage = (props) => {
  return (
    <img 
      className={props.iconStyle}
      src={props.source}
    />
  )
}

export default Dish
