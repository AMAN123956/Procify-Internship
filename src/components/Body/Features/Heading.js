import styles from './Heading.module.css'
import leafImg from '../../../assets/img/three.png'
function Heading() {
    return (
        <div className={styles.headingSection}>
            <img src={leafImg} />
            <h2 className={styles.heading1}>
                Welcome to Nature
            </h2>
            <h4 className={styles.heading2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
            </h4>
        </div>
    )
}

export default Heading
