import styles from './Form.module.css'

function Form() {
    return (
        <div>
            <form>
                <div className={styles.formItem}>
                    <input type="text" placeholder="Enter Your E-mail Address"
                       className={styles.inputField}
                    />
                    <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
                </div>
            </form>
        </div>
    )
}

export default Form
