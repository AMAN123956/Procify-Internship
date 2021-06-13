import logoImg from '../../assets/img/footerlogo.png'
import styles from './Organic.module.css'

function Organic() {
    return (
        <div className={styles.organicBox}>
            <div className={styles.logoSection}>
                <img src={logoImg} className={styles.logoImg} alt="footer_logo" />
            </div>
            <div className={styles.contentSection}>
                <p className={styles.heading1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor
                </p>
                <div className={styles.dashedLine}></div>
                <h3>© Copyright 2020 Nature</h3>
            </div>
        </div>
    )
}

export default Organic
