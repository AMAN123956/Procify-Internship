import styles from './Social.module.css'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'





function Social() {
   
    return (
        <div className={styles.socialBox}>
            <h2 className={styles.heading1}>
                Follow US
            </h2>
            <div className={styles.dashedLine}></div>
            <div className={styles.socialIconCorner}>
               
                <FontAwesomeIcon  className={styles.socialIcon} icon={faFacebook} />
                <FontAwesomeIcon  className={styles.socialIcon} icon={faLinkedin} />
                <FontAwesomeIcon  className={styles.socialIcon} icon={faTwitter} />
                <FontAwesomeIcon  className={styles.socialIcon} icon={faInstagram} />
            </div>
            
        </div>
    )
}

export default Social
