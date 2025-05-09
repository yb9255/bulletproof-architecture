import { useUser } from '@/features/users/api/get-user';
import { ROUTE_CONSTANTS } from '@/config/path';
import { cn } from '@/lib/cn';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router';

const PostUserInfo = ({ userId }: { userId: number }) => {
  const { data: user } = useUser({
    id: userId,
  });

  return (
    <header>
      <Link
        to={ROUTE_CONSTANTS.users.getUserById(user.id)}
        className={cn('flex', 'items-center', 'gap-2')}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className={cn('text-sm', 'text-gray-500')}>{user.name}</span>
      </Link>
    </header>
  );
};

export default PostUserInfo;
