import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import frameIcon from '../assets/frame.svg';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardHeading}>
          <h2 className={styles.flowerName}>{product.name}</h2>
          <p className={styles.scientificName}>{product.binomialName}</p>
        </div>

        <div className={styles.imageContainer}>
          <img src={product.imgUrl} alt={product.name} className={styles.flowerImage} />
          <div className={styles.priceTag}>€{product.price}</div>
          <div className={styles.goToButton}>
            <img src={frameIcon} alt="Ver" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;