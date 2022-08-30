import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface Props {
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  value: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: Props) => {
  const isMounted = useRef(false);
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const increaseBy = (val: number) => {
    let newValue = Math.max(counter + val, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    return onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && counter === initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
