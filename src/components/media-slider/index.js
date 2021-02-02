import React from 'react';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick-theme.css";
import gearjunkie from '../../images/third-party-log/gearjunkie-vector-logo.jpg';
import wired from '../../images/third-party-log/wired_logo.jpg';
import mashable from '../../images/third-party-log/mashable_logo.jpg';
import './index.css';

const MediaSlider = () => {
//     const [slideIndex, setSlideIndex] = useState(1);


//    const nextSlide = () => {
//         setSlideIndex(slideIndex + 1);
//     }

//     const prevSlide = () => {
//         setSlideIndex(slideIndex - 1);
//     }

    // const showSlides = (n) => {
    //     var i;
    //     var slides = document.getElementsByClassName("slide");
    //     if (n > slides.length) {slideIndex = 1}
    //     if (n < 1) {this.slideIndex = slides.length}
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     // slides[this.slideIndex-1].style.display = "block";
    //   }
    const sliderSettings = {
        arrows: true,
        draggable: true,
        focusOnSelect: true,
        initialSlide: 0,
        slidesPerRow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesPerRow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    draggable: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    draggable: true
                }
            }
        ]
    }

     return (
        <section className="media-slider">
            <Slider {...sliderSettings}>
                {/* <div className={`slide ${slideIndex === 0 ? 'active' : '' }`}> */}
                <div className="slide">
                    <img src={gearjunkie} alt="gear junkie"/>
                    <p>&quot;You focus on putting in the work, and the technology handles the rest.&quot;</p>
                </div>
                {/* <div className={`slide ${slideIndex === 1 ? 'active' : '' }`}> */}
                <div className="slide">
                    <img src={wired} alt="wired"/>
                    <p>&quot;Literally transports you from home to wherever you choose to run.&quot;</p>
                </div>
                {/* <div className={`slide ${slideIndex === 2 ? 'active' : '' }`}> */}
                <div className="slide">
                    <img src={mashable} alt="mashable"/>
                    <p>&quot;Breathes new life into a tired, old running routine.&quot;</p>
                </div>
                {/* <a class="prev" onClick={prevSlide}>&#10094;</a>
                <a class="next" onClick={nextSlide}>&#10095;</a> */}
            </Slider>
        </section>
     )
}

export default MediaSlider;