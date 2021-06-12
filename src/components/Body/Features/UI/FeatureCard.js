import styles from './FeatureCard.module.css'


function FeatureCard(props) {
    return (
        <div className={styles.featureCard}>
            <img src={props.img} className={ styles.cardImg}/>
        </div>
    )
}

export default FeatureCard
