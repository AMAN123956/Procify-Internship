import styles from './Heading.module.css'
import flowerImg from '../../assets/img/one.png'
import backTexture from '../../assets/img/two.png'
function Heading() {
    return (
        <div className={styles.headingContainer}>
            
            {/* Left Section */}
            <div className={styles.leftsection}>
                <h2 className={styles.heading2}>
                Healthy Life With
                </h2>
                <h1 className={styles.heading1}>
                    Nature Organic
                </h1>
                <p className={styles.heading2}>
                    Vegitables are editible parts of plants that
                    is used in cooking for home use.
                </p>
                <a href="" className={styles.enquireBtn}>
                    Enquire Now
                </a>
            </div>

            {/* Right Section */}
            <div className={styles.rightsection}>
                <div className={styles.rectangleBox}>
                   <img  />
                </div>
            </div>
        </div>
    )
}

export default Heading
