/* eslint-disable import/no-cycle */
import { createContext, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';

import {
  Product, ProductContextProps, OnChangeArgs, InitialValues, ProductCardHandlers,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({
  children,
  onChange,
  product,
  value = 0,
  initialValues,
  className,
  style,
}: Props) => {
  const {
    counter,
    isMaxCountReached,
    maxCount,
    increaseBy,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount: initialValues?.maxCount,
    }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children && children({
          count: counter,
          isMaxCountReached,
          maxCount,
          reset,
          increaseBy,
          product,
        }) }
      </div>
    </Provider>
  );
};
