import React, { Component } from 'react';
import { Tag, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import actions from '../store/actions/list';

import { connect } from 'react-redux';
class List extends Component {
    routerLink = () => {
        this.props.history.push(`/article/${1}`);
    }
    async componentDidMount() {
        let classify;
        let page;
        switch (this.props.location.pathname) {
            case '/blog':
                classify = 1;
                break;
            case '/esary':
                classify = 2;
                break;
            default:
                console.log(this.props.match.params);
                page = this.props.match.params.id;
                break;
        }
        await this.props.getListData({ cid: classify });
    }
    render() {
        return (<div>
            <ul className="list">
                {this.props.data.map((item, index) => (
                    <li className="list-li" key={index} onClick={this.routerLink}>
                        <h2>{item.title}</h2>
                        <div>
                            <span className="time"><Icon className="icon" type="clock-circle" />{item.createAt}</span>
                            <span><Icon className="icon" type="eye" />阅读量: {item.pv}</span>
                            <span><Icon className="icon" type="message" />评论: {item.star}</span>
                        </div>
                        <div className="labelBox">
                            {item.label.indexOf(',') == -1 ?
                                <Tag className="label">{item.label}</Tag> :
                                item.label.split(',').map((lab, i) => (<Tag key={i} className="label">{lab}</Tag>))}
                        </div>
                    </li>)
                )}
            </ul>
        </div>)
    }
};
export default connect(state =>
    ({ data: state.list.data }),
    dispatch => ({
        getListData: (data) => dispatch(actions.getListData(data))
    })
)(withRouter(List));