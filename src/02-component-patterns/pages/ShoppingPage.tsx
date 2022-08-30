import {
  ProductCard, ProductImage, ProductTitle, ProductButtons,
} from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const [product] = products;

export const ShoppingPage = () => (
  <div>
    <h1>Shopping Store</h1>
    <hr />
    <ProductCard
      product={product}
      key={product.id}
      initialValues={{
        count: 4,
        maxCount: 10,
      }}
      className="bg-dark text-white"
    >
      {
        ({
          reset, increaseBy, isMaxCountReached, count,
        }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset} type="button">RESET</button>
            {
              isMaxCountReached
                ? <button onClick={() => increaseBy(-2)} type="button">-2</button>
                : <button onClick={() => increaseBy(2)} type="button">2</button>
            }
            <span>{count}</span>

          </>
        )
      }
    </ProductCard>
  </div>
);

export default ShoppingPage;
