import React from 'react';

const DailyHours = (props) => {
    let openHours = "closed"
    if ((props.opens != "") && (props.closes != "")) {
      openHours = props.opens + " - " + props.closes;
    }
    return (
      <div className="statictext">{props.day + ": " + openHours}</div>
    )
  }

export default DailyHours;