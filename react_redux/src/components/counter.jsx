import React, { Component } from 'react';
import PropTypes from  'prop-types'
class counter extends Component {
    porpsTypes ={
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired,
    }

    increment=()=>{
        const m =  Number(this.select.value) 
        this.props.increment(m)
    }
    decrement = ()=>{
        const m =  Number(this.select.value) 
        this.props.decrement(m)
    }
    incrementIfOdd =()=>{
       if( Math.abs(this.props.count%2) === 1 ){
        const m =  Number(this.select.value) 
        this.props.increment(m)
       }
    }
    incrementAsync= ()=>{
        const m =  Number(this.select.value) 
        this.props.incrementAsync(m)
    }

    render() {
        return (
            <div>
                <p>Click {this.props.count} times</p> &nbsp;&nbsp;&nbsp;&nbsp;
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}

export default counter