import React, {Component} from 'react';
import Frame from './frame';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {Tag} from 'antd';

class Tags extends Component {
    routerLink = () => {
        this.props.history.push(`/search/${2}`);
    }
    render() {
        return (<div className="tags">
            <Tag onClick={this.routerLink}>11</Tag>
        </div>);
    }
}

const Table = Frame('标签')(connect(state=>({}))(withRouter(Tags)));
export default Table;