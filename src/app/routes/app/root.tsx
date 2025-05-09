import { MainLayout } from '@/components/layouts';
import GlobalNavBar from '@/components/GlobalNavBar';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';

const AppRoot = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <GlobalNavBar />
      <Suspense fallback={<Spinner />} key={location.key}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export default AppRoot;
