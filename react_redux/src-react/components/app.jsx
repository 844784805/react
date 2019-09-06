import React, { Component } from 'react';


class app extends Component {
    state ={
        num: 0
    }
    increment=()=>{
        const {num} = this.state
        const m = num + Number(this.select.value) 
        this.setState({
            num: m
        })
    }
    decrement = ()=>{
        const {num} = this.state
        const m = num - Number(this.select.value) 
        this.setState({
            num: m
        })
    }
    incrementIfOdd =()=>{
        const {num} = this.state
        if( num%2 === 1  ){
            const m = num + Number(this.select.value) 
            this.setState({
                num: m
            })
        }
    }
    incrementAsync = ()=>{
        const {num} = this.state
        setTimeout(()=>{
            const m = num + Number(this.select.value) 
            this.setState({
                num: m
            })
        },1000)
        
    }
    render() {
        const {num} = this.state
        return (
            <div>
                <p>Click {num} times</p> &nbsp;&nbsp;&nbsp;&nbsp;
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
        );
    }
}


export default app;