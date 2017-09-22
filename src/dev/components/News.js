// get an array of news, turn it into a list of valid news (validFrom & validUntil < today)
// StaticText.props.text
// props.news = news array
// props.todayDate = the date of today

import React from "react"
import StaticText from "./StaticText.js"

const News = (props) => {
  let newsItems = []
  let today = new Date(props.todayDate)
  // reset the hours of of today's date
  today.setHours(0,0,0,0);
  props.news.forEach(function(newsItem, index) {
    let validFrom = new Date(newsItem.validFrom)
    let validUntil = new Date(newsItem.validUntil)
    // only add news if todayDate between validFrom and validUntil
    if (today >= validFrom  && today <= validUntil) {
      newsItems.push(<StaticText key={"news-" + index} text={newsItem.news} />)
    }
  })
  if (newsItems.length === 0) 
    { 
      return(null) 
    } else {
      return (
        <div>
          {newsItems}
        </div>
      )
}
}

export default News