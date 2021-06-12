import Card from './UI/FeatureCard'
import styles from './Cards.module.css'
import cardImg1 from '../../../assets/img/four.png'
import cardImg2 from '../../../assets/img/five.png'
function Cards() {
    return (
        <div className={styles.cardBox}>
            <Card img={cardImg1} />
            <Card img={cardImg2} />
            <Card img={cardImg1} />
            <Card img={cardImg1} />
        </div>
    )
}

export default Cards
