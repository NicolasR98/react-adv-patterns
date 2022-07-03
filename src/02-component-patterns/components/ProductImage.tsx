import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const productImage = img || product.img || noImage;

  return (
    <img
      src={productImage}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
