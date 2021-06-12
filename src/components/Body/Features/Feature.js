import styles from './Feature.module.css'
import Heading from './Heading'
import Card from './Cards'
function Feature() {
    return (
        <div className={styles.featureContainer}>
            <Heading />
            <Card />
        </div>
    )
}

export default Feature
