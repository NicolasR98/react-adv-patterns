/* eslint-disable no-undef */
import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

// REACT-ROUTER-DOM Route interface
interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyComponent1 = lazy(() => import(/* webpackChunkName : "LazyView1" */'../01-lazyload/views/LazyView1'));
const LazyComponent2 = lazy(() => import(/* webpackChunkName : "LazyView2" */'../01-lazyload/views/LazyView2'));

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: '/lazy1',
    name: 'Lazy-1',
    Component: LazyComponent1,
  },
  {
    to: '/lazy2',
    path: '/lazy2',
    name: 'Lazy-2',
    Component: LazyComponent2,
  },
];
