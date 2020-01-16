import React, { Component } from 'react'
import Widget from './Widget'

export default class SideWidgets extends Component {
    render() {
        return (
            <div className="widgetsContainer">
                <Widget styles="widget blackBack shadow" title="Pagos vencidos" number="02"/>
                <Widget styles="widget whiteBack shadow" title="Pagos por vencer" number="04"/>
                <Widget styles="widget yellowBack shadow" title="Inquilinos registrados" number="49"/>
            </div>
        )
    }
}
