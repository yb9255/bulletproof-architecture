import { cn } from '@/lib/cn';
import { ROUTE_CONSTANTS } from '@/config/path';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const GlobalNavBar = () => {
  return (
    <nav
      className={cn(
        'flex',
        'gap-3',
        'shadow-sm',
        'flex-1',
        'sticky',
        'top-0',
        'items-center',
        'bg-white'
      )}
    >
      <Button asChild variant="link">
        <Link to={ROUTE_CONSTANTS.home.root}>Home</Link>
      </Button>
      <Button asChild variant="link">
        <Link to={ROUTE_CONSTANTS.posts.root}>Posts</Link>
      </Button>
      <Button asChild variant="link">
        <Link to={ROUTE_CONSTANTS.users.root}>Users</Link>
      </Button>
    </nav>
  );
};
export default GlobalNavBar;
