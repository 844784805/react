import React, { Component } from 'react';

import * as actions from '../redux/actions'
class app extends Component {
    increment=()=>{
        const m =  Number(this.select.value) 
        this.props.store.dispatch(actions.increment(m))
    }
    decrement = ()=>{
        const m =  Number(this.select.value) 
        this.props.store.dispatch(actions.decrement(m))
    }
    incrementIfOdd =()=>{
       if(this.props.store.getState()%2 ===1 ){
        const m =  Number(this.select.value) 
        this.props.store.dispatch(actions.increment(m))
       }
    }

    render() {
        return (
            <div>
                <p>Click {this.props.store.getState()} times</p> &nbsp;&nbsp;&nbsp;&nbsp;
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


export default app;