import React, { Component } from 'react'

export default class SideMenu extends Component {
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
        return (
            <div className={ this.state.condition ? "sideMenu sideMenuEx" : "sideMenu" } >
                <div className={ this.state.condition ? "dot dotPos" : "dot"} onClick={this.handleClick}></div>
                <div className="avatar"></div>
                <h4>Bienvenido Administrador</h4>
                <p>Cambiar contraseña</p>
                <p>Salir</p>
            </div>
        )
    }
}
