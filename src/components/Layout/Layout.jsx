import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
          <Navigation />
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
