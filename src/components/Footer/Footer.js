import styles from './Footer.module.css'
import Organic from './Organic'
import Information from './Information'
import About from './About'
import Social from './Social'

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <Organic />
            <Information />
            <About />
            <Social />
        </div>
    )
}

export default Footer
