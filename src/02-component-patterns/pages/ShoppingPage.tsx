import styles from '../styles/styles.module.css';
import {
  ProductCard, ProductImage, ProductTitle, ProductButtons,
} from '../components';

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
            <ProductCard product={product} key={product.id}>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </ProductCard>
          ))
        )
      }
      {
        products
        && products.length > 0
        && (
          products.map((product) => (
            <ProductCard product={product} key={product.id}>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </ProductCard>
          ))
        )
      }
    </div>
  </div>
);

export default ShoppingPage;
