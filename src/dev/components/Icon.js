// visualising values with images
// props:
//  type = boolean, value, incremental
//  images = array of image urls
//  value = 0, 1, ... , N = which icon to display and how, according to the type

import React from "react"

const Icon = (props) => {
  let iconGroup = []
  if (props.type === "boolean" && props.value) {
    iconGroup.push(<IconImage key="0" source={props.images[0]} />)
  }
  return (
  <div className="dishIcons">
    {iconGroup}
  </div>
  )
}

const IconImage = (props) => {
  return (
    <img
      src={props.source}
    />
  )
}

export default Icon
