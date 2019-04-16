import React, { Component } from 'react';
// BrowserRouter
import { BrowserRouter as Router, Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';

import Head from './components/header';
import Banner from './components/banner';
import Lately from './components/lately';
import Tags from './components/tags';


import Profile from './views/profile';
import Home from './views/home';
import Blog from './views/blog';
import Esary from './views/esary';
import Article from './views/article';
import Search from './views/search';

import { Layout, Row, Col } from 'antd';
const { Header } = Layout;


export default class app extends Component {
    state = {
        scroll: 0,
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollFn);
    }
    componentWillMount() {
        window.removeEventListener('scroll', this.scrollFn);
    }
    scrollFn = (ev) => {
        let timer;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            this.setState({ scroll: scrollTop });
        }, 300);
    }
    render() {
        return (<Router>
            <Header className={['header', this.state.scroll > 100 ? 'scroll' : null]}>
                <Head></Head>
            </Header>
            <Banner></Banner>
            <Row gutter={16} className="box">
                <Col span={11} offset={4}>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/blog' state="1" component={Blog} />
                        <Route path='/esary' state="2" component={Esary} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/article/:id' component={Article} />
                        <Route path='/search/:type/:id' component={Search} />
                        <Redirect to='/home'></Redirect>
                    </Switch>
                </Col>
                <Col span={5}>
                    <Lately />
                    <Tags />
                </Col>
            </Row>
        </Router>)
    }
}