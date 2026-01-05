import styles from './SearchBar.module.css';
import searchIcon from '../assets/search.svg';

const SearchBar = ({ value, onChange }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={searchIcon} alt="Buscar" className={styles.icon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Busca en nuestra tienda"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;