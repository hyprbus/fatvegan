import React from "react"

class FlipBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(e) {
    this.props.onValueSelect(this.props.id, e.target.checked)
  }

  render () {return (
    <p className="filterCheckbox">
      <input type="checkbox"
        checked={this.props.value}
        onChange={this.handleFilterChange}
      />
      {" " + this.props.label}
    </p>
  )
  }
}

export default FlipBox
