import React, { Component } from 'react'

export default class AddEdifForm extends Component {
    render() {
        return (
            <div>
                <form>
                   <label htmlFor="">Agregar nuevo edificio: </label> <input type="text"/>
                </form>
            </div>
        )
    }
}
