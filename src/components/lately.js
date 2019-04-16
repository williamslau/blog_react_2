import React, { Component } from 'react';
import Frame from './frame';
import { withRouter } from 'react-router-dom';

import actions from '../store/actions/list';

import { connect } from 'react-redux';
class olList extends Component {
    routerLink = (id) => {
        this.props.history.push(`/article/${id}`);
    }
    async componentDidMount() {
        await this.props.getLatelyData();
    }
    render() {
        return (<ol>
            {
                this.props.lately.map((item, index) => (
                    <li onClick={() => this.routerLink(item.aid)} key={index}>{item.title}</li>
                ))
            }
        </ol>)
    }
}
const Latelly = Frame('最近文章')(connect(state =>
    ({ lately: state.list.lately }),
    dispatch => ({
        getLatelyData: () => dispatch(actions.getLatelyData())
    })
)(withRouter(olList)));
export default Latelly;