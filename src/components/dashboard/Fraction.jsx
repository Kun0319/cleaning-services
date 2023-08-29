import React, { Component } from 'react';
import "./order.css";
class Fraction extends Component {
    state = {
        count: this.props.value,

    };


    render() {

        return (
            <div>
                <span>{this.props.name}</span>
                <button
                    onClick={this.handleDecrement}
                    className='scorebtn'
                >-</button>
                <span>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className='scorebtn'
                >+</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
        if (this.state.count >= 5) {
            this.setState({ count: this.state.count = 5 })
        }

    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
        if (this.state.count <= 0) {
            this.setState({ count: this.state.count = 0 })
        }

    }


    formatCount() {
        const { count } = this.state;
        return (count === 0) ? "0" : count;
    }
}



export default Fraction;