import UsersList from '@/features/users/components/UsersList';
import { cn } from '@/lib/cn';

const UsersRoute = () => {
  return (
    <>
      <header className={cn('flex', 'items-center', 'gap-2')}>
        <h1>유저 리스트</h1>
      </header>
      <UsersList />
    </>
  );
};

export default UsersRoute;
