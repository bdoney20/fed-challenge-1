import React from 'react';
import Slider from "react-slick";
import gearjunkie from '../../images/third-party-log/gearjunkie-vector-logo.jpg';
import wired from '../../images/third-party-log/wired_logo.jpg';
import mashable from '../../images/third-party-log/mashable_logo.jpg';
import './index.scss';

const MediaSlider = () => {

    const sliderSettings = {
        infinite: true,
        draggable: true,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        lazyLoad: true,
        centerPadding: '30%'
    }

     return (
         <div className="media-slider">
            <Slider {...sliderSettings}>
                <div className="slide">
                    <img src={gearjunkie} alt="gear junkie"/>
                    <p>&quot;You focus on putting in the work, and the technology handles the rest.&quot;</p>
                </div>
                <div className="slide">
                    <img src={wired} alt="wired"/>
                    <p>&quot;Literally transports you from home to wherever you choose to run.&quot;</p>
                </div>
                <div className="slide">
                    <img src={mashable} alt="mashable"/>
                    <p>&quot;Breathes new life into a tired, old running routine.&quot;</p>
                </div>
                <div className="slide">
                    <img src={gearjunkie} alt="gear junkie"/>
                    <p>&quot;You focus on putting in the work, and the technology handles the rest.&quot;</p>
                </div>
                <div className="slide">
                    <img src={wired} alt="wired"/>
                    <p>&quot;Literally transports you from home to wherever you choose to run.&quot;</p>
                </div>
                <div className="slide">
                    <img src={mashable} alt="mashable"/>
                    <p>&quot;Breathes new life into a tired, old running routine.&quot;</p>
                </div>
            </Slider>
        </div>
     )
}

export default MediaSlider;