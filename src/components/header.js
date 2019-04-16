import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Menu from './menu';

class Header extends Component {
    handleSearch = (e) => {
        console.log(e);
        this.props.history.push(`/search/input/1`);
    }
    handleChange=(e)=>{
        console.log(e);
    }
    render() {
        return (<div>
            <Row>
                <Col span={10}>
                    {/*<h1 className="header_bt">大志</h1>*/}
                    <img src="https://williamlau.oss-cn-beijing.aliyuncs.com/images/log.png" alt="" />
                </Col>
                <Col span={14}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Input.Search
                                plageholder="请输入关键字"
                                value={this.props.inputVal}
                                onChange={this.handleChange}
                                onSearch={this.handleSearch}
                            />
                        </Col>
                        <Col span={12}>
                            <Menu />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>)
    }
}
export default connect(state => ({
    inputVal: state.header.inputVal,
}))(withRouter(Header));