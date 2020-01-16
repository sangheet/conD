import React, { Component } from 'react'

export default class Widget extends Component {
    render() {
        return (
            <div className={this.props.styles}>
                <div className="widgetNumber">{this.props.number}</div>
                <div className="widgetTitle">{this.props.title}</div>
            </div>
        )
    }
}
