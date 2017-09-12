import React from "react"

const DailyHours = (props) => {
    let openHours = "closed"
    if ((props.opens != "") && (props.closes != "")) {
      openHours = props.opens + " - " + props.closes
    }
    return (
      <div className={!props.highlight ? "statictext" : "statictext highlighted"}>
        <div className="tableLikeCell">{props.day}</div>
        <div className="tableLikeCell">{openHours}</div>
      </div>
    )
  }

export default DailyHours
