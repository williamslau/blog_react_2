import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd'
class Head extends Component {
    render() {
        return (<div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['0']}
                onClick={this.handleClick}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="0">
                    <Link to="/home"><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="/blog"><Icon type="book" />博客</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/esary"><Icon type="form" />随笔</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/profile"><Icon type="setting" />设置</Link>
                </Menu.Item>
            </Menu>
        </div>)
    }
}
export default Head;