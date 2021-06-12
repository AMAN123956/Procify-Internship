import React from 'react'
import Feature from './Features/Feature'
import Present from './Presented/Present'
import Testimonial from './Testimonial/Testimonial'
import Newsletter from './Newsletter/Newsletter'
import Blog from './Blog/Blog'
import styles from './Body.module.css'

function Body() {
    return (
        <div className={styles.bodySection}>
            <Feature />
            <Present />
            <Testimonial />
            <Newsletter />
            <Blog />
        </div>
    )
}

export default Body
