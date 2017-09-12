import React from 'react'
import StaticText from './StaticText.js'
import TextHeader from './TextHeader.js'
import DailyHours from './DailyHours.js'
import getWeekdayName from '../functions/getWeekdayName.js'
import setHTMLBackground from "../functions/setHTMLBackground.js"

class Hours extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() { 
    setHTMLBackground(1)
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
      <div className="sectionElement">
        <TextHeader text="Hours" />
        {listItems}
      </div>
    )
  }
}

export default Hours
