import React, { Component } from 'react';
import Frame from './frame';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class olList extends Component {
    routerLink = () => {
        this.props.history.push(`/article/${2}`);
    }
    render() {
        return (<ol>
            <li onClick={this.routerLink}>11</li>
        </ol>)
    }
}
const Latelly = Frame('最近文章')(connect(state=>({}))(withRouter(olList)));
export default Latelly;