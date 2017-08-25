import React from 'react';

// components
import StaticText from './StaticText.js';
import TextHeader from './TextHeader.js';
import DailyHours from './DailyHours.js';

// functions
import getWeekdayName from '../functions/getWeekdayName.js';
import setHTMLBackground from '../functions/setHTMLBackground.js';

const Hours = (props) => {
  setHTMLBackground(0);
  const listItems = props.hours.map((d) =>
    <DailyHours
      key={d.weekday}
      day={getWeekdayName(d.weekday)}
      opens={d.opens}
      closes={d.closes}
    />
  );  
  return (
    <div className="sectionElement">
      <TextHeader text="Hours" />
      {listItems}
    </div>
  )
}

export default Hours;