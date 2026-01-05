import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
    </header>
  );
};

export default Header;