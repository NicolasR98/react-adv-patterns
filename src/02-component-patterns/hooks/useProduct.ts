import { useEffect, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface Props {
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  value: number;
}

export const useProduct = ({ onChange, product, value }: Props) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (val: number) => {
    const newValue = Math.max(counter + val, 0);
    setCounter(newValue);
    return onChange && onChange({ product, count: newValue });
  };

  return {
    counter,
    increaseBy,
  };
};
