import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';
import separatorIcon from '../assets/separator.svg';

interface BreadcrumbsProps {
  productName?: string;
}

const Breadcrumbs = ({ productName }: BreadcrumbsProps) => {
  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/" className={styles.item}>Inicio</Link>
      <div className={styles.separatorWrapper}>
        <img src={separatorIcon} alt=">" className={styles.separator} />
      </div>
      {productName && (
        <span className={styles.current}>{productName}</span>
      )}
    </nav>
  );
};

export default Breadcrumbs;