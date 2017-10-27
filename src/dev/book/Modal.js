// props:
//
// visible=true/false
// header=text
// children = child component(s)
// confirmationText = confirm button label
// cancelModal() = cancel modal callback
// approveModal() = approve modal callback

import React from "react"

export default class Modal extends React.Component {
  constructor(props) {
    super()
    this.handleCancel = this.handleCancel.bind(this)
    this.handleApprove = this.handleApprove.bind(this)
  }
  
  handleCancel() {
    this.props.cancelModal()
  }

  handleApprove() {
    this.props.approveModal()
  }
  render() {
    if (!this.props.visible) {
      return null
    }
    const buttonClass = this.props.approveButtonDisabled ? "modalButton controlDisabled" : "modalButton"
    return (
        <div className="modal" id={this.props.modalId} >
          <div className="modalContent">
            <div className="modalHeader">
              {this.props.header}
            </div>
            {this.props.children}
            <button 
              disabled={this.props.approveButtonDisabled} 
              className={buttonClass} 
              onClick={this.handleApprove}>{this.props.confirmationText}
            </button>
            <button className="modalButton" onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
    )
  }
}
