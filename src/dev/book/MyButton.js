// a selector component
import React from "react"

export default class MyButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // apply rest of arguments (props) to the callback function
  handleClick() {
    this.props.action()
  }

  render() {
    const buttonStyle = "myButton"
    const disabled = "controlDisabled"
    if (this.props.enabled) {
      return (
        <div 
          className={buttonStyle} 
          onClick={this.props.action}
        >
          {this.props.label}
        </div>
      )} else {
        return (
          <div 
            className={buttonStyle  + " "+ disabled}
          >
            {this.props.label}
          </div>
        )}
  }
}