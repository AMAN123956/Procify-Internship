import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import styles from './Present.module.css'

function Present() {
    return (
        <div className={styles.presentContainer}>
            <Header />
            <Carousel />
        </div>
    )
}

export default Present
