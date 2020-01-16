import React, { Component } from 'react';




export default class MainContainer extends Component {
    
    render() {
        return (
            <div className="mainContainer shadow">
                <div className="mainTitle">{this.props.title}</div>
                <div className="mainContent">{this.props.content}</div>
            </div>
        )
    }
}
