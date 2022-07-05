import styles from '../styles/Header.module.css';
// Import di fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookReader, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
const Header = () =>{
  return (
    <div className={styles.container}>
      <FontAwesomeIcon size="3x" icon={faBookReader} />
      <div className={styles.rightContainer}>      
        <p style={{ marginRight: '20px' }}>I miei libri</p>
        <FontAwesomeIcon size="2x" icon={faPlusSquare} />
      </div>

    </div>
  )
}

export default Header;