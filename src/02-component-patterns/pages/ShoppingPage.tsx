import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';
import {
  ProductCard, ProductImage, ProductTitle, ProductButtons,
} from '../components';
import useShoppingCart from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className={styles.productsContainer}>
        {
          products
        && products.length > 0
        && (
          products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        )
        }
      </div>
      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              value={product.count}
              onChange={onProductCountChange}
              className="bg-dark text-white shopping-cart__item"
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
      <pre>
        {JSON.stringify(shoppingCart, null, 2)}
      </pre>
    </div>
  );
};

export default ShoppingPage;
