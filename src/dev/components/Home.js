import React from "react"
import StaticText from "./StaticText.js"
import News from "./News.js"
import TextHeader from "./TextHeader.js"

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="subPage">
        <StaticText text="Uudenmaankatu 1 A, 00100 Helsinki" />
        <div className="statictext phone"><a href="tel:+358407066006"> Phone: +358 40 706 6006 >></a></div>
        <StaticText text={this.props.opentoday} />
        <StaticText text="Nearby? There's usually room at the bar, or call us for a reservation." />
        <TextHeader text="News" />        
        <News news={this.props.news} todayDate={this.props.todayDate} />
      </div>
    )
  }
}

export default Home
