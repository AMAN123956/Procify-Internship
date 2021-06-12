import styles from './Navbar.module.css'
import logoImg from '../../assets/img/logo.png'
function Navbar() {
    return (
        <div className={styles.mainNavbar}>
            <div className={styles.leftSection}>
                <img src={logoImg} className={styles.logoImg} alt="logo_img"/>
            </div>
            <div className={styles.rightSection}>
                <li>Home</li>
                <li>Product</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </div>
        </div>
    )
}

export default Navbar
