import { ProductCard } from '../components/ProductCard';

import styles from '../styles/styles.module.css';

const products = [
  {
    id: '1',
    name: 'Coffee mug',
    img: './coffee-mug.png',
  },
  {
    id: '2',
    name: 'Toy car',
  },
];

export const ShoppingPage = () => (
  <div>
    <h1>Shopping Store</h1>
    <hr />
    <div className={styles.productsContainer}>
      {
        products
        && products.length > 0
        && (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )
      }
    </div>
  </div>
);

export default ShoppingPage;
