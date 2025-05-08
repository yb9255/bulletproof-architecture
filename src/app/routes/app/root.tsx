import { MainLayout } from '@/components/layouts';
import GlobalNavBar from '@/components/GlobalNavBar';
import { Spinner } from '@/components/ui/spinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const AppRoot = () => {
  return (
    <MainLayout>
      <GlobalNavBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export default AppRoot;
