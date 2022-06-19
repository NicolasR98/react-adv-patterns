import { ReactElement } from 'react';

export interface Product {
  id: string;
  name: string;
  img?: string;
}
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}
