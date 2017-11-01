// get an array of news, turn it into a list of valid news (validFrom & validUntil < today)
// StaticText.props.text
// props.news = news array
// props.todayDate = the date of today

import React from "react"
import StaticText from "./StaticText.js"
import SmallHeader from "./SmallHeader.js"

const News = (props) => {
  let newsItems = []
  let today = new Date(props.todayDate)
  // reset the hours of of today's date
  today.setHours(0,0,0,0);
  let length = props.news.length
  for (let i = 0; i < length; i++) {
    let validFrom = new Date(props.news[i].validFrom)
    let validUntil = new Date(props.news[i].validUntil)
    if (today >= validFrom  && today <= validUntil) {
      newsItems.push(<StaticText key={"news-" + i} text={props.news[i].news} />)
    }
  }
  if (newsItems.length === 0) 
    { 
      return(null) 
    } else {
      return (
        <div>
          <SmallHeader text="News" />      
          {newsItems}
        </div>
      )
}
}

export default News