import styles from './Testimonial.module.css'
import Carousel from './Carousel'
function Testimonial() {
    return (
        <div className={styles.testimonialContainer}>
            <Carousel />
        </div>
    )
}

export default Testimonial
