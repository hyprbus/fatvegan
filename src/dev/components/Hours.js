import React from 'react'
import StaticText from './StaticText.js'
import TextHeader from './TextHeader.js'
import DailyHours from './DailyHours.js'
import getWeekdayName from '../functions/getWeekdayName.js'

class Hours extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = this.props.hours.map((d) =>
      <DailyHours
        key={d.weekday}
        day={getWeekdayName(d.weekday)}
        opens={d.opens}
        closes={d.closes}
        highlight={parseInt(d.weekday) === this.props.today ? true : false}
      />
    )
    return (
      <div className="subPage">
        <TextHeader text="Hours" />
        {listItems}
      </div>
    )
  }
}

export default Hours
