import type { User } from '@/types/api';
import { cn } from '@/lib/cn';
import { ROUTE_CONSTANTS } from '@/config/path';
import { Link } from 'react-router';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserListItem = ({ user }: { user: User }) => {
  return (
    <li>
      <Link
        to={ROUTE_CONSTANTS.users.getUserById(user.id)}
        className={cn('flex', 'items-center', 'gap-2')}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>{user.name}</span>
      </Link>
    </li>
  );
};

export default UserListItem;
