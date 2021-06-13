import styles from './Information.module.css'


function Information() {
    return (
        <div className={styles.informationBox}>
            <h2 className={styles.heading1}>
                Information
            </h2>
            <div className={styles.dashedLine}></div>
            <h4 className={styles.heading2}>
                About Us
            </h4>
            <h4 className={styles.heading2}>
                Products
            </h4>
            <h4 className={styles.heading2}>
                Contact Us
            </h4>
            <h4 className={styles.heading2}>
                Terms of Services
            </h4>
            
        </div>
    )
}

export default Information
