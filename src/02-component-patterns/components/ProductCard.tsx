import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
// import noImage from '../assets/no-image.jpg';

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        src="./coffee-mug.png"
        alt="coffee mug"
        className={styles.productImg}
      />
      {/* <img src={noImage} alt="no img" className={styles.productImg} /> */}
      <span className={styles.productDescription}>Coffee mug</span>

      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={styles.buttonMinus}
          onClick={() => increaseBy(-1)}
        >
          -
        </button>
        <div className={styles.countLabel}>{ counter }</div>
        <button
          type="button"
          className={styles.buttonAdd}
          onClick={() => increaseBy(1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
