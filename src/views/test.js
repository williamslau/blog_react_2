import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from '../store/actions/test'

class test extends Component {
    add = () => {
        this.props.add(1);
    }
    minus = () => {
        this.props.minus(2);
    }
    render() {
        return (<div>
            {this.props.number}
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
        </div>)
    }
}
export default connect(state => ({
    number: state.test.number
}), action)(test);
