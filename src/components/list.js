import React, { Component } from 'react';
import { Row, Col, Tag, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import actions from '../store/actions/list';

import { connect } from 'react-redux';
class List extends Component {
    routerLink = () => {
        this.props.history.push(`/article/${1}`);
    }
    async componentDidMount() {
        await this.props.getListData({
            current: 1,
            pageSize: 5,
            link: '5b42da1302d0635fd5386299'
        });
    }
    render() {
        return (<div>
            <ul className="list">
                <li className="list-li" onClick={this.routerLink}>
                    <Tag className="label">React</Tag>
                    <Row>
                        <Col span={24} className="text">
                            <h2>撒大苏打</h2>
                            <div>
                                <span className="time"><Icon className="icon" type="clock-circle" />2018-9-20 08:00:00</span>
                                <span><Icon className="icon" type="eye" />阅读量: 10</span>
                                <span><Icon className="icon" type="message" />评论: 10</span>
                            </div>
                        </Col>
                    </Row>
                </li>
            </ul>
        </div>)
    }
};
export default connect(state => ({
    data: state.list.data,
}), dispatch => ({
    getListData: (data) => dispatch(actions.getListData(data))
}))(withRouter(List));