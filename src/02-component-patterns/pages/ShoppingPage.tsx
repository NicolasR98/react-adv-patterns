import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';
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
            <ProductCard
              product={product}
              key={product.id}
              className="bg-dark text-white"
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-white" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))
        )
      }
      {
        products
        && products.length > 0
        && (
          products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              className="bg-dark text-white"
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        )
      }
      <ProductCard
        product={products[0]}
        key={products[0].id}
        style={{ backgroundColor: 'yellow' }}
      >
        <ProductCard.Image />
        <ProductCard.Title
          style={{ fontWeight: 'bold' }}
        />
        <ProductCard.Buttons
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      </ProductCard>
    </div>
  </div>
);

export default ShoppingPage;
