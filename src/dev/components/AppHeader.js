import React from 'react'

// props.animate === null, "grow", "shrink"

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.animate === null ? false : true
  }

  render () {
    let rowStyle = ""
    let logoStyle = ""
    let sloganStyle = ""
    switch (this.props.animate) {
      case "shrink":
        rowStyle = " heading-shrink"
        logoStyle = " logo-shrink"
        sloganStyle = " slogan-shrink"
        break
      case "grow":
        rowStyle = " heading-grow"
        logoStyle = " logo-grow"
        sloganStyle = " slogan-grow"
        break
    }
    return (
      <div className={"headerContainer" + rowStyle}>
        <div className={"logo" +  logoStyle} >
          <img className="logoImage" src="images/fat-vegan-logo.svg" />
        </div>
        <div className={"slogan" + sloganStyle} >
          100% Vegan,<br></br>100% Pleasure
        </div>
      </div> 
  )}
}

