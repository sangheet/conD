import React, { Component } from 'react'

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false
        };
      }
      handleClick = () => {
        this.setState({
          condition: !this.state.condition
        });
      };
      
    render() {
        return (<div>
            <div className={ this.state.condition ? "blur" : "blurOff" }></div>
            <div className={ this.state.condition ? "modal modalEX shadow" : "modal" }>
            <div className="modalContent">{this.props.content}</div>
            </div>
            <div className={ this.state.condition ? "addButton addButtonEX shadow" : "addButton" } onClick={this.handleClick}></div></div>
        )
    }
}
