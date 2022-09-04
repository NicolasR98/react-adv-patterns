import {
  ProductCard, ProductImage, ProductTitle, ProductButtons,
} from '../components';
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
    >
      {
        () => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
      }
    </ProductCard>
  </div>
);

export default ShoppingPage;
