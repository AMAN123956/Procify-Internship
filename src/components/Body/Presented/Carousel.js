import React from "react";
import Slider from "react-slick";
import styles from './Carousel.module.css'
import img1 from '../../../assets/img/cone.png'
import img2 from '../../../assets/img/ctwo.png'
import img3 from '../../../assets/img/cthree.png'

export default function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
    };
    return (
        <Slider {...settings} className={styles.sliderBox}>
            <div className={styles.carouselItem}>
                <img src={img1} className={styles.carouselImg} />
            </div>
            <div className={styles.carouselItem}>
                <img src={img2} className={styles.carouselImg} />
            </div>
            <div className={styles.carouselItem}>
                <img src={img3} className={styles.carouselImg} />
            </div>
            <div className={styles.carouselItem}>
                <img src={img2} className={styles.carouselImg} />
            </div>
            <div className={styles.carouselItem}>
                <img src={img1} className={styles.carouselImg} />
            </div>
            {/* Second Row */}
            <div className={styles.carouselItem}>
                <img src={img1} className={styles.carouselImg} />
            </div>
            <div className={styles.carouselItem}>
                <img src={img2} className={styles.carouselImg} />
            </div>
            <div className={styles.carouselItem}>
                <img src={img3} className={styles.carouselImg} />
            </div>
            <div className={styles.carouselItem}>
                <img src={img2} className={styles.carouselImg} />
            </div>
            <div className={styles.carouselItem}>
                <img src={img1} className={styles.carouselImg} />
            </div>

        </Slider>
    );
}