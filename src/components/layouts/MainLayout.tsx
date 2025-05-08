import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/cn';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main
      className={cn('flex', 'flex-col', 'gap-3', 'w-screen', 'bg-background')}
    >
      {children}
    </main>
  );
};
export default MainLayout;
