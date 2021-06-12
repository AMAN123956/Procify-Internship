import styles from './Newsletter.module.css'
import Header from './Header'
import Form from './Form'
function Newsletter() {
    return (
        <div className={styles.newsletterContainer}>
            <Header />
            <Form />
        </div>
    )
}

export default Newsletter
