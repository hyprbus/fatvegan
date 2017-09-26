import React from "react"
import { NavLink } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const navlinks = []
    this.props.menuItems.map((item, index) => {
      if (this.props.menuVisibility[index]) {
        navlinks.push(
          <CSSTransition
            key={"menubuttonanim" + index}
            classNames="menuButton"
            timeout={480}
          >
            <NavLink
              exact={item.exactlink}
              to={item.to}
              className={item.class}
              activeClassName={item.activeclass}
              key={"navlink" + index}
            >
            {item.label}
            </NavLink>
          </CSSTransition>
        )
      }
    }
  )
    return (
      <TransitionGroup className="menuButtonsContainer">
        {navlinks}
      </TransitionGroup>
    )
  }
}
