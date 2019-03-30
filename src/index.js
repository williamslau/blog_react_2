import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.less';
import './static/css/common.less';

render(<Provider store={store}>
    <App />
</Provider>, window.root);
