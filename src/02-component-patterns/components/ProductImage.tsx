import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }: { img?: string }) => {
  const { product } = useContext(ProductContext);
  const productImage = img || product.img || noImage;

  return (
    <img
      src={productImage}
      alt="Product"
      className={styles.productImg}
    />
  );
};
