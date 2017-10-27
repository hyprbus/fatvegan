// wrapping container with common functionality for each site page

import React from "react"
import setHTMLBackground from "../functions/setHTMLBackground.js"

export default function wrapSitePage(WrappedComponent) { 
  return class extends React.Component {
  constructor(props) {
    super(props)
  }

  handleMenuVisibility(visibilityArray) {
    this.props.displayMenu(visibilityArray)
  }

  componentDidMount() {
    this.props.setLogoSize(this.props.smallLogo)
    this.handleMenuVisibility(this.props.visibilityArray)
    setHTMLBackground(this.props.background)
  }

    render() {
      return ( 
        <div className="pageWrapper">
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

