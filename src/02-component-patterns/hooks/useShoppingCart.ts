import { useState } from 'react';
import { Cart, OnChangeArgs } from '../interfaces/interfaces';

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<Cart>({});

  const onProductCountChange = ({ product, count }: OnChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

export default useShoppingCart;
