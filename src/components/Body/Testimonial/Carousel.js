import React from "react";
import Slider from "react-slick";
import styles from './Carousel.module.css'
import img1 from '../../../assets/img/tone.png'
import img2 from '../../../assets/img/ttwo.png'

export default function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className={styles.sliderBox}>

            {/* First Row */}
            <div className={styles.carouselItem}>
                <img src={img1} className={styles.carouselTopImg} />
                <img src={img2} className={styles.carouselImg} />
                <h2 className={styles.heading1}>
                    John Doe
                </h2>
                <p className={styles.heading2}>
                    Thank you for all the amazing produce and products you deliver each week…
                    you make my life so easy an bring goodness into our family eating.
                    I’ve been roasting a lot of brussel sprouts and
                </p>
            </div>

            {/* Second Row */}
            <div className={styles.carouselItem}>
                <img src={img1} className={styles.carouselTopImg} />
                <img src={img2} className={styles.carouselImg} />
                <h2 className={styles.heading1}>
                    John Doe
                </h2>
                <p className={styles.heading2}>
                    Thank you for all the amazing produce and products you deliver each week…
                    you make my life so easy an bring goodness into our family eating.
                    I’ve been roasting a lot of brussel sprouts and
                </p>
            </div>

            {/* Third Row */}
            <div className={styles.carouselItem}>
                <img src={img1} className={styles.carouselTopImg} />
                <img src={img2} className={styles.carouselImg} />
                <h2 className={styles.heading1}>
                    John Doe
                </h2>
                <p className={styles.heading2}>
                    Thank you for all the amazing produce and products you deliver each week…
                    you make my life so easy an bring goodness into our family eating.
                    I’ve been roasting a lot of brussel sprouts and
                </p>
            </div>

        </Slider>
    );
}