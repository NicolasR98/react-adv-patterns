import { Suspense } from 'react';
import {
  BrowserRouter, Navigate, NavLink, Route, Routes,
} from 'react-router-dom';

import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />

          <ul>
            {
              routes.map(({ name, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    { name }
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

        <Routes>
          {
            routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))
          }
          <Route path="/*" element={<Navigate to={routes[0].to} />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Suspense>
);
