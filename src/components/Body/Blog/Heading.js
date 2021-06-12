import styles from './Heading.module.css'
import leafImg from '../../../assets/img/three.png'

function Heading() {
    return (
        <div className={styles.headingBox}>
            <img src={leafImg} className={styles.leafImg} />
            <h2 className={styles.heading1}>
                Read Our Blog
            </h2>
            <p className={styles.heading2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}

export default Heading
