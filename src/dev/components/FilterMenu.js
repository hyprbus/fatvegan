import React from 'react';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleGlutenFreeInputChange = this.handleGlutenFreeInputChange.bind(this);
  }

  handleGlutenFreeInputChange(e) {
    this.props.onGlutenFreeInput(e.target.checked);
  }
  
  render() {
    return (
      <form className="filterMenu">
        <p>
          <input type="checkbox"
            checked={this.props.GlutenFreeOnly}
            onChange={this.handleGlutenFreeInputChange}
          />
          {' '}
          Gluten-free only
        </p>
    </form>
    )
  }
}

export default FilterMenu;