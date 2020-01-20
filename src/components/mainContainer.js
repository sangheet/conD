import React, { Component } from 'react';
import Modal from './Modal';
import AddEdifForm from './AddEdifForm';




export default class MainContainer extends Component {

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
            <div className="mainContainer shadow ">
                <div className="mainTitle">{this.props.title}</div>
                <div className="mainContent">{this.props.content}</div>
                <Modal content=<AddEdifForm/> />
            </div>
        )
    }
}
