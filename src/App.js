import React, { Component } from 'react';
// BrowserRouter
import { BrowserRouter as Router, Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import Banner from './components/banner';
import Profile from './views/profile';
import Home from './views/home';
import Blog from './views/blog';
import Esary from './views/esary';
import { Layout } from 'antd';
const { Content } = Layout;


export default class app extends Component {
    render() {
        return (<Router>
            <Banner></Banner>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/blog' component={Blog} />
                <Route path='/esary' component={Esary} />
                <Route path='/profile' component={Profile} />
                <Redirect to='/home'></Redirect>
            </Switch>
        </Router>)
    }
}