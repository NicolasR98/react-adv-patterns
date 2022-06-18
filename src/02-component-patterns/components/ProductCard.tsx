import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Product {
    id: string;
    name: string;
    img?: string;
}
interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        src={product.img || noImage}
        alt={product.name}
        className={styles.productImg}
      />
      <span className={styles.productDescription}>{ product.name }</span>

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
