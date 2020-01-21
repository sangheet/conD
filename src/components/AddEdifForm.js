import React, { Component } from 'react'

export default class AddEdifForm extends Component {
    render() {
        return (
            <div>
                <h2>Agregar nuevo Edificio</h2>
                <form>
                   <label htmlFor="">Nombre del edificio: </label> <input type="text"/><button className="saveButton">Guardar</button>
                </form>
            </div>
        )
    }
}
