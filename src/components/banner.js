import React, { Component } from 'react';

import { Carousel } from 'antd';
import img1 from '../static/images/timg1.jpg';
import img2 from '../static/images/timg2.jpg';
import img3 from '../static/images/timg3.jpg';
import img4 from '../static/images/timg4.jpg';
import img5 from '../static/images/timg5.jpg';

class Banner extends Component {
    render() {
        return (<Carousel effect="fade" className="banner">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </Carousel>)
    }
}
export default Banner;