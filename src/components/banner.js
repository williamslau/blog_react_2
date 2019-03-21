import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../static/images/timg1.jpg';
import { Menu, DatePicker } from 'antd';
class Banner extends Component {
    render() {
        return (<div><DatePicker />
            <Menu
                mode="horizontal"
                // defaultSelectedKeys={['0']}
                onClick={this.handleClick}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="0">
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="/blog">博客</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/esary">随笔</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/profile">设置</Link>
                </Menu.Item>
            </Menu>
        </div>)
    }
}
export default Banner;